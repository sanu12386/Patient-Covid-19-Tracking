import DoctorRepository from "../models/doctors.repository.js";  // Import the DoctorRepository model
import { sendToken } from "../../utils/sendToken.js"; // Import the sendToken utility function


// Creating and exporting Doctor Controller class
export default class DoctorController {
    constructor() {
        // Initialize a new instance of DoctorRepository
        this.doctorRepository = new DoctorRepository();
    }

    // Method to register a new doctor
    async register(req, res, next) {

        // Extract username and password from the request body
        const { username, password } = req.body;
        try {
            // Check if a doctor with the given username already exists
            const existingDoctor = await this.doctorRepository.findDoctorByUSername(username);
            // Send an error response if username exists
            if (existingDoctor) {
                return res.status(400).json({ message: "Username already exist" })
            }
            // Register the new doctor with the provided data
            const doctor = await this.doctorRepository.registerDoctor(req.body);
            // Send a success response with the registered doctor data
            res.status(201).json({ message: 'Doctor registerd successfully', doctor });
        } catch (error) {
            // Send an error response if there's an internal server error
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // login method for doctor authentication
    async login(req, res) {
        // Extract username and password from the request body
        const { username, password } = req.body;
        try {
            // Find a doctor by the given username
            const doctor = await this.doctorRepository.findDoctorByUSername(username);
            // Send an error response if username is invalid
            if (!doctor) {
                return res.status(401).json({ message: 'Invalid username' });
            }
            // Compare the provided password with the stored password
            const passwordMatch = await doctor.comparePassword(password);
            // Send an error response if password is invalid
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Send a token if authentication is successful
            await sendToken(doctor, res, 200);
        } catch (error) {
            console.log("error", error); // Log the error for debugging purposes
            res.status(500).json({ message: 'Internal server error' });

        }
    }

    // logout method for doctor logout
    async logout(req, res) {
        // Clear the token cookie and send a success response
        res
            .status(200)
            .cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true,
            })
            .json({ success: true, msg: "logout successful" });
    };
}