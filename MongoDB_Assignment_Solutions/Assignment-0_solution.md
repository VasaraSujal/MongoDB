**Task 1: Create a "CodingGita Students" database**

Create a new MongoDB database called `CodingGita`. Add two collections:
=> use assignment_0

- `students`: Name, roll number, department, year, courses enrolled.
=> db.createCollection("students");

- `courses`: Course code, name, credits, instructor.
=> db.createCollection("courses");


Insert sample data into both collections.
=> db.students.insertMany([
  { 
    "name": "Jenil",
    "rollNumber": 101,
    "department": "Computer Science",
    "year": 2,
    "coursesEnrolled": ["CS101", "CS102"]
  },
  { 
    "name": "Mahir",
    "rollNumber": 102,
    "department": "Computer Science",
    "year": 2,
    "coursesEnrolled": ["CS101", "CS103"]
  },
  { 
    "name": "Sujal",
    "rollNumber": 103,
    "department": "Electrical Engineering",
    "year": 3,
    "coursesEnrolled": ["EE101", "EE102"]
  }
]);

=> db.courses.insertMany([
  { 
    "courseCode": "CS101", 
    "courseName": "Introduction to Programming", 
    "credits": 3, 
    "instructor": "Prof. Sharma" 
  },
  { 
    "courseCode": "CS102", 
    "courseName": "Data Structures", 
    "credits": 3, 
    "instructor": "Prof. Gupta" 
  },
  { 
    "courseCode": "CS103", 
    "courseName": "Algorithms", 
    "credits": 3, 
    "instructor": "Prof. Kapoor" 
  },
  { 
    "courseCode": "EE101", 
    "courseName": "Basic Electrical Engineering", 
    "credits": 4, 
    "instructor": "Prof. Verma" 
  }]);

**Task 2: Perform CRUD operations**

- Add a few more students and courses to the database.
=> db.students.insertOne(
  { 
    "name": "Darshan",
    "rollNumber": 105,
    "department": "Computer Science",
    "year": 2,
    "coursesEnrolled": ["CS103", "CS104"]
  }
);


=> db.courses.insertOne(
    {
    "courseCode": "CS104", 
    "courseName": "Introduction to C Programming", 
    "credits": 3, 
    "instructor": "Prof. Patel" 
    }
);

- Query data based on:

  - Department (e.g., "Computer Science").
  => db.students.find({"department": "Computer Science"});

  - Year (e.g., "2").
  => db.students.find({"year": 2});

  - Courses enrolled (e.g., "CS101")
  => db.students.find({"coursesEnrolled": "CS101"});


- Update the courses for a specific student (e.g., adding a new course).
=> db.students.updateOne(
    {"name": "Jenil"},
    { $push: {"coursesEnrolled": "DSA"}}
);

- Delete a student or course from the database.
=> db.courses.deleteOne({"courseCode": "CS101"});