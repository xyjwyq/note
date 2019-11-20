import React, { useState } from "react";
import useTimer from "./useTimer";
import useAllStudents from './useGetAllStudents'

export default function Comp() {
  useTimer(() => {
    console.log("Comp");
  }, 1000);
  const students = useAllStudents();
  console.log(students);
  return <div></div>;
}
