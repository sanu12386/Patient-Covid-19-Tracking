import Doctor from "./doctors.schema.js";  // Import the Doctor schema

// Define and export the DoctorRepository class
export default class DoctorRepository{

    // Method to register a new doctor
    async registerDoctor(body){
        // Create a new doctor instance with the provided data and save it to the database
        return await Doctor(body).save();
    }

    // Method to find a doctor by username
    async findDoctorByUSername(username){
        // Find a doctor in the database with the given username
        return await Doctor.findOne({username});
    }
}