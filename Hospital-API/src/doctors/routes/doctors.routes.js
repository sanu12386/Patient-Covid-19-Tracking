import express  from "express";
import DoctorController from "../controllers/doctors.controller.js"; // Import the DoctorController class

// Create a new instance of DoctorController
const doctorController = new DoctorController();

// Create a new router for doctor-related routes
const doctorRoute = express.Router();

// route for registering a new doctor
doctorRoute.post('/register', (req,res, next)=>{
    doctorController.register(req, res, next);
});

// route for logging in a doctor
doctorRoute.post('/login', (req, res)=>{
    doctorController.login(req, res);
})

// route for logging out a doctor
doctorRoute.post('/logout', (req, res)=>{
    doctorController.logout(req, res);
})

// Export the doctorRoute router
export default doctorRoute;