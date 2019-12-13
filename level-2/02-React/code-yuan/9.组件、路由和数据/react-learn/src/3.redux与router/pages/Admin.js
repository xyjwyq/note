import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Aside from "../components/Aside";
import StudentList from './student/StudentList'
import StudentAdd from './student/StudentAdd'
import courseList from './course/courseList'
import courseAdd from './course/courseAdd'
import StudentDetail from './student/StudentDetail'
import Welcome from './Welcome'
import { Route } from "react-router-dom";

export default function Admin() {
  return (
    <Layout header={<Header />} aside={<Aside />}>
      <Route path="/" exact component={Welcome} />
      <Route path="/students/:sno" exact component={StudentDetail} />
      <Route path="/students" exact component={StudentList} />
      <Route path="/students/add" exact component={StudentAdd} />
      <Route path="/courses" exact component={courseList} />
      <Route path="/courses/add" exact component={courseAdd} />
    </Layout>
  );
}
