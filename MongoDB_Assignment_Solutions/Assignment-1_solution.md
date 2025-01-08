#### **Task 1: Add multiple students**
Insert at least **5 students** into the `students` collection with unique roll numbers, names, departments, years, and subjects enrolled.

=> db.students.insertMany([
  { 
    "name": "Jatin",
    "rollNumber": 104,
    "department": "Information Technology",
    "year": 2,
    "subjectsEnrolled": ["React", "NodeJS", "MongoDB"]
  },
  { 
    "name": "Sujal",
    "rollNumber": 105,
    "department": "Computer Science",
    "year": 2,
    "subjectsEnrolled": ["React", "NodeJS", "Java Script"]
  },
  { 
    "name": "Prem",
    "rollNumber": 106,
    "department": "EE",
    "year": 3,
    "subjectsEnrolled": ["Circuit Theory"]
  },
  { 
    "name": "Kalp",
    "rollNumber": 107,
    "department": "EC",
    "year": 2,
    "subjectsEnrolled": ["Circuit Theory", "C Language"]
  },
  { 
    "name": "Arya",
    "rollNumber": 108,
    "department": "Mechnical Engineering",
    "year": 2,
    "subjectsEnrolled": ["Circuit Theory", "Electrical Machines"]
  }
]);


#### **Task 2: Add multiple subjects**

Insert **4 subjects** into the `subjects` collection, each with 3 to 5 topics.
=> db.subjects.insertMany([
  { 
    "subjectName": "C Language",
    "topics": [
      "loop", 
      "operator", 
      "syntax"
    ]
  },
  { 
    "subjectName": "HTML , CSS", 
    "topics": [
      "Tags", 
      "Header", 
      "Inline CSS", 
      "External CSS"
    ]
  },
  { 
    "subjectName": "JavaScript", 
    "topics": [
      "Conditional", 
      "Loops", 
      "Declaration", 
      "syntax"
    ]
  }
]);


#### **Task 3: Query students based on subject enrollment**
Query the `students` collection to find all students who are enrolled in **NodeJS**.
=> db.students.find({"subjectsEnrolled": "NodeJS"});

#### **Task 4: Add a new topic to a subject**
Add a new topic to the **NodeJS** subject.
=> db.subjects.updateOne(
    {
    "subjectName": "JavaScript", 
    { $push: {"topics": "NodeJS"}}
    }
);

#### **Task 5: Query subjects with multiple topics**
Query the `subjects` collection to find subjects that contain **at least 4 topics**.
=>  

#### **Task 6: Update student enrollment**
Add the subject **"React Native"** to **Jenil's** subjects.
=> db.students.updateOne(
    {"name": "Jenil"},
    { $push: {"subjectsEnrolled": "React Native"}}
);

#### **Task 7: Query all students**
Query all students in the database and print out their names and enrolled subjects.
=> 

#### **Task 8: Update multiple students' year**
Update the year for all students in the **Computer Science** department to year 3.
=> db.students.updateMany(
    {"department": "Computer Science"},
    { $set: {"year": 3}}
);

#### **Task 9: Add new topics to multiple subjects**
Add new topics to **React**, **NodeJS**, and **MongoDB** subjects. Ensure each subject gets at least **one** new topic.
=> 

#### **Task 10: Remove a topic from a subject**
Remove the topic **"Express"** from the **NodeJS** subject.
=> db.courses.deleteOne({"topics": "Hooks"});

#### **Task 11: Query all students in a specific year**
Query and return all students in **year 2** or **year 3**.
=> db.students.find({
  $or: [{ year: 2 }, { year:3 }]
});

#### **Task 12: Delete a student by roll number**
Delete a student from the database using their **roll number**.
=> db.students.deleteMany({"rollNumber": 102});

#### **Task 13: Delete all students from a department**
Delete all students who belong to the **Electrical Engineering** department.
=> db.students.deleteMany({"department": "Electrical Engineering"});

#### **Task 14: Retrieve all topics for a subject**
Query the **MongoDB** subject and retrieve all topics listed for it.
=> 

#### **Task 15: Count the number of subjects in which a student is enrolled**
Write a query that returns the number of subjects each student is enrolled in.
=> 
