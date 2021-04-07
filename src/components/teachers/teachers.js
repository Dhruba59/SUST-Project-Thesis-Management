import React, { Component } from "react";
import Teacher from "./teacher/teacher";
import img from "../../assets/img/trump.jpg";
import css from "./teacher/teacher.module.css";

const teachers = (props) => {
  //const teachers_data = props.teacher_data;
  const teachers_data = [
    {
      name: "Saiful islam",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Saiful isladsfsm",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Saiful islam",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Saiful islam",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    },
    {
      name: "Saiful islam",
      age: 34,
      designation: "Assistance Prof",
      img: img,
    }
  ];

  let Teachers = Object.keys(teachers_data).map((teacherr) => {
    console.log(teachers_data[teacherr].name);
    return (
      <Teacher
        img={teachers_data[teacherr].img}
        name={teachers_data[teacherr].name}
        designation={teachers_data[teacherr].designation}
        age={teachers_data[teacherr].age}
      />
    );
  });

  return <div className={css.Teachers}>{Teachers}</div>;
};
export default teachers;
