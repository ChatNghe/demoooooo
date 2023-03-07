import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";

import {editStudents, getStudents, searchStudents} from "../../../services/studentsServices";


export default function EditStudents() {

    let {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const students = useSelector(state => {
        return state.students.currentStudent;
    })
    const handleEdit = (values) => {
        let data = [{...values}, id];
        dispatch(editStudents(data)).then(() => {
            dispatch(getStudents()).then(() => {
                navigate('/home');
            })
        })
    }
    useEffect(() => {
        dispatch(searchStudents(id))
    }, []);

    return (
        <>
            <body className="img js-fullheight">
            <div className="container mt-2 py-5">
                <div className="container mt-2 form-group">
                    <div className="row mt-2 ">
                        {(students !== undefined && students) ? <>
                            <Formik initialValues={{
                                name: students.name,
                                description: students.description

                            }}
                                    onSubmit={(values) => {
                                        handleEdit(values)
                                    }}
                                    enableReinitialize={true}>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <Field type="text" className="form-control" name={'name'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Description</label>
                                        <Field type="text" className="form-control" name={'description'}/>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </Form>
                            </Formik>

                        </> : <>

                        </>}

                    </div>
                </div>
            </div>
            </body>
        </>

    )
}