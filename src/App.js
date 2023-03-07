import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";

import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";

import ListStudent from "./pages/Home/student/listStudent";
import AddStudents from "./pages/Home/student/addStudents";
import EditStudents from "./pages/Home/student/editStudents";


function App() {
    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path={'/'} element={<Home/>}>
                        <Route path={'home'} element={<ListStudent/>}/>
                    </Route>
                    <Route path={'add-student'} element={<AddStudents/>}/>
                    <Route path={'edit-student/:id'} element={<EditStudents/>}/>
                </Routes>
            </div>
        </>

    );
}

export default App;

