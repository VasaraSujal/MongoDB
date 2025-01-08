const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection details
const uri = "mongodb://127.0.0.1:27017"; 
const dbName = "codinggita";

// Middleware
app.use(express.json());

let db, students;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        courses = db.collection("courses");

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all students
app.get('/courses', async (req, res) => {
    try {
        const allcourses = await courses.find().toArray();
        res.status(200).json(allcourses);
    } catch (err) {
        res.status(500).send("Error fetching courses: " + err.message);
    }
});

// POST: Add a new student
app.post('/courses', async (req, res) => {
    try {
        // console.log("Request Object:", req);
        // console.log("Request Body:", req.body);
        const newCourses = req.body;
        const result = await courses.insertOne(newCourses);
        res.status(201).send(`Courses added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding course: " + err.message);
    }
});

// // PUT: Update a student completely
app.put('/courses/:courseName', async (req, res) => {
    try {
        console.log("Request Object:", req.params);
        console.log("Request Body:", req.body);
        const courseName = (req.params.courseName);
        const updatedCourse = req.body;
        const result = await courses.replaceOne({ courseName }, updatedCourse);
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error updating Course: " + err.message);
    }
});

// // PATCH: Partially update a student
app.patch('/courses/:courseName', async (req, res) => {
    try {
        const courseName = (req.params.courseName);
        const updates = req.body;
        const result = await courses.updateOne({ courseName }, { $set: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating course: " + err.message);
    }
});

// // DELETE: Remove a student
app.delete('/courses/:courseName', async (req, res) => {
    try {
        const courseName = (req.params.courseName);
        const result = await courses.deleteOne({ courseName });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting Course: " + err.message);
    }
});