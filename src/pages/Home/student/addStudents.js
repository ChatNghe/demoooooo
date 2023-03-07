import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {addStudents} from "../../../services/studentsServices";

export default function AddStudents() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleAdd = async (values) => {
        dispatch(addStudents(values))
        navigate('/home')
    }

    return (
        <div className={'row'}>
            <div className="offset-4 col-4 mt-5">
                <h1 style={{textAlign: 'center'}}>Add Blog</h1>
                <Formik initialValues={{name: '', description: ''}} onSubmit={(values) => {
                    handleAdd(values).then(() => {
                    })
                }}>
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
            </div>
        </div>
    )
}