import React from "react";
import "./GridView.css";
const GridView=() => {
    let students=[
        {
          name: "Arjun",
          phone: "+91 8525080167",
          age: 18,
          content: "Computer Science student at RVS Engineering College",
          cgpa: 8.5,
        },
        {
          name: "Sanjay Kumar",
          phone: "+1987654321",
          age: 21,
          content:
            "Electronics and Communication student at RVS Engineering College",
          cgpa: 8.8,
        },
        {
          name: "Karventhan",
          phone: "+1122334455",
          age: 22,
          content: "Mechanical Engineering student at RVS Engineering College",
          cgpa: 7.9,
        },
        {
          name: "Nithish",
          phone: "+1555666777",
          age: 20,
          content: "Civil Engineering student at RVS Engineering College",
          cgpa: 8.2,
        },
        {
          name: "Prem",
          phone: "+1444333222",
          age: 23,
          content: "Information Technology student at RVS Engineering College",
          cgpa: 9.0,
        },
        {
          name: "Prasana",
          phone: "+1666777888",
          age: 21,
          content:
            "Electrical and Electronics Engineering student at RVS Engineering College",
          cgpa: 8.7,
        },
        {
          name: "Kanish",
          phone: "+1777888999",
          age: 22,
          content: "Computer Science student at RVS Engineering College",
          cgpa: 8.4,
        },
        {
          name: "Olivia Taylor",
          phone: "+1888999000",
          age: 20,
          content: "Biomedical Engineering student at RVS Engineering College",
          cgpa: 8.6,
        },
        {
          name: "Matthew Clark",
          phone: "+1999000111",
          age: 23,
          content: "Automobile Engineering student at RVS Engineering College",
          cgpa: 7.8,
        },
        {
          name: "Emma Martinez",
          phone: "+1222111333",
          age: 21,
          content:
            "Artificial Intelligence and Data Science student at RVS Engineering College",
          cgpa: 9.1,
        },
      

    ];
    return(
        <div className="grid-view">
            {students.map((students,index) => (
                <div key={index} className="student-card">
                    <h2>{students.name}</h2>
                    <div>Phone : {students.phone}</div>
                    <div>Age : {students.age}</div>
                    <p>Content : {students.content}</p>
                    <div> CGPA :{students.cgpa}</div>
                </div>
            ))}
        </div>
    );
};

export default GridView;