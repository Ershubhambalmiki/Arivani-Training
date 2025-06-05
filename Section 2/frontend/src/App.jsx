import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Facebookcard from './components/Facebookcard';
import Navbar from './components/Navbar';
import StudentData from './components/StudentData';
import Student from './components/Student';
import LaptopsList from './components/LaptopsList';
import LaptopCardInformetion from './components/LaptopCardInformetion';
import TaskApp from './components/TaskApp';


function App(){
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>}path='/'/>
        <Route element={<Signup/>}path='/signup'/>
        <Route element={<Facebookcard/>}path='/facbookcard'/>
        <Route element={<StudentData/>}path='/student'/>
        <Route element={<Student/>}path='/student-form'/>
        <Route element={<LaptopsList/>}path='/laptop-list/'/>
        <Route path="/laptop-card/" element={<LaptopCardInformetion />} />
        <Route path="/task/" element={<TaskApp />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;