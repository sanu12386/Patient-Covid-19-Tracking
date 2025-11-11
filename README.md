**🏥 Hospital API**

A robust and secure Hospital Management API built for doctors and patients to manage medical reports, track patient health, and effectively control the spread of COVID-19.

**🌟 Introduction**

The Hospital API is designed to support doctors in government-designated hospitals for COVID-19 testing, quarantine management, and patient well-being tracking.
It provides key features like managing patient records, tracking test results, assigning quarantine facilities, and ensuring patient safety.

This project follows a RESTful API architecture and is built using Node.js, Express.js, MongoDB, and Mongoose.
For easy API testing and visualization, Swagger UI is integrated.


**🚀 Features**

✅ Authentication – Secure login system for doctors using JWT.
✅ Authorization – Role-based access control for data security.
✅ CRUD Operations – Manage hospitals, doctors, and patients.
✅ Relationships – Link doctors, patients, and hospitals efficiently.
✅ Search Functionality – Search doctors, patients, or hospitals by multiple criteria.
✅ Error Handling – Structured error responses with meaningful messages.
✅ API Documentation – Interactive documentation using Swagger.


**🧠 Tech Stack**


Technology	Purpose
Node.js	Backend runtime environment
Express.js	Web framework for API development
MongoDB	NoSQL database
Mongoose	MongoDB object modeling
JWT (JSON Web Token)	Secure authentication
Bcrypt.js	Password hashing
Swagger UI	Interactive API documentation


**🗂️ Project Structure**




Hospital_API/
├── config/            # Database configuration
├── middlewares/       # Authentication & validation middlewares
├── src/
│   ├── doctors/
│   │   ├── controllers/  # Business logic for doctors
│   │   ├── models/       # Schemas and database logic
│   │   └── routes/       # Route definitions
│   ├── patients/
│   │   ├── controllers/  # Business logic for patients
│   │   ├── models/       # Schemas and database logic
│   │   └── routes/       # Route definitions
│   └── utils/            # Helper utilities (JWT, etc.)
├── index.js              # App entry point
├── package.json          # Dependencies and scripts
├── swagger.json          # Swagger configuration
├── .env.example          # Example environment variables
└── README.md             # Project documentation


**⚙️ Getting Started**


1️⃣ Clone the repository:
git clone (https://github.com/sanu12386/Patient-Covid-19-Tracking)
cd Hospital_API

2️⃣ Install dependencies:
npm install

3️⃣ Setup environment variables:

Create a .env file in the root directory and add:

PORT=6000
DB_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d

4️⃣ Start the server:
npm start

**🤝 Contributing**

Contributions are welcome!
If you’d like to improve or add new features:

Fork this repo 🍴

Create a new branch (feature/your-feature-name)

Submit a Pull Request 🚀

**💬 Acknowledgements**

Thanks to everyone contributing towards open-source healthcare technology.
Together, we can build digital solutions that save lives.
