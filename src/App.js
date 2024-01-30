import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assests/scss/app.scss";
import Register from './component/UserRole/Register';
import Login from './component/UserRole/Login';
import AdminPanel from './component/Admin/AdminPanel';
import BottomSheet from './component/BottomSheet';
import Create from './component/CurdOperation/CreateData';
import ReadData from './component/CurdOperation/ReadData';
import UpdataData from './component/CurdOperation/UpdataData';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Register />} />
    <Route path='/admin' element={<AdminPanel />} />
    <Route path='/login' element={<Login />} />
    <Route path='/bottomsheet' element={<BottomSheet />} />
    <Route path='/create' element={<Create />} />
    <Route path='/read' element={<ReadData />} />
    <Route path='/update' element={<UpdataData />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

