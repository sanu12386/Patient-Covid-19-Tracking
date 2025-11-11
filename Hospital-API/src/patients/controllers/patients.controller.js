import PatientRepository from "../models/patients.repository.js"; // Import the PatientRepository model

// Define and export the PatientController class
export default class PatientController{
    constructor(){
        // Initialize a new instance of PatientRepository
        this.patientRepository = new PatientRepository();
    }

    // Method to register a new patient
    async register(req, res) {

        // Extract patient name and phone number from the request body
        const { patientName, phoneNumber } = req.body;
        try {
            // Register the patient with the provided name and phone number
            const patient = await this.patientRepository.register(patientName, phoneNumber);
            // Send a success response with the registered patient data
            res.status(201).json(patient);
        } catch (error) {
            // Send an error response if there's an internal server error
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    // Method to create a report for a patient
    async createReport(req, res) {
        try {
            // Create a report for the patient with the given patient ID, user ID, and status
            const patient = await this.patientRepository.createReportForPatient(req.params.id,req.user.id, req.body.status);
            // Send a success response with the created report
            res.json(patient);
        } catch (error) {
            console.log("error", error) // Log the error for debugging purposes
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    // Method to get all reports for a patient
    async getAllReports(req, res) {
        const { id } = req.params; // Extract the patient ID from the request parameters
        try {
            // Get all reports for the patient with the given patient ID
            const reports = await this.patientRepository.getAllReportsForPatient(id);
            // Send a success response with the retrieved reports
            res.json(reports);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Method to get all the patients with same status
    async statusOfAllPatient(req, res){
        try {
            // Get all patients with the given status
            const result = await this.patientRepository.statusOfAllPatient(req.params.status)
            // Send a success response with the retrieved data
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });

        }
    }
}