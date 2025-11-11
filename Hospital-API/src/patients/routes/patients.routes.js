import express from 'express';
import PatientController from '../controllers/patients.controller.js';  // Import the PatientController class
import { auth } from '../../../middlewares/auth.middleware.js'; // Import the authentication middleware

// Create a new instance of PatientController
const patientController = new PatientController();

// Create a new router for patient-related routes   
const patientRoute = express.Router();

// Apply the authentication middleware to all routes in this router 
patientRoute.use(auth);

// route for registering a new patient
patientRoute.post('/patients/register', (req, res) =>{
    patientController.register(req, res);
});

// route for creating a report for a specific patient
patientRoute.post('/patients/:id/create_report', (req, res)=>{
    patientController.createReport(req, res);
});

// route for getting reports of all patients with a specific status
patientRoute.get('/patients/:id/all_reports', (req, res) =>{
    patientController.getAllReports(req, res);
})
patientRoute.get('/reports/:status', (req, res) =>{
    patientController.statusOfAllPatient(req, res);
})

// Export the patientRoute router
export default patientRoute;