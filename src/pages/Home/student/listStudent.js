import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getStudents, deleteStudents} from "../../../services/studentsServices";
import swal from 'sweetalert';
import {Link, useNavigate} from "react-router-dom";


export default function ListStudent() {
    const dispatch = useDispatch();
    const students = useSelector(state => {
        return state.students.students
    })
    // console.log(posts)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getStudents())
    }, [])
    const handleDelete = async (id) => {
        dispatch(deleteStudents(id)).then(() => (
            dispatch(getStudents()).then(() => {
                navigate('/home')
            })
        ))
    }

    return (
        <>
            <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            students !== undefined && students.map((item, index) => (
                                    <tr>
                                        <th scope="col">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button type="submit" className="ml-3 btn btn-danger" onClick={() => {
                                                swal({
                                                    title: "Are you sure?",
                                                    text: "Once deleted, you will not be able to recover this imaginary file!",
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                })
                                                    .then((willDelete) => {
                                                        console.log(item)
                                                        if (willDelete) {
                                                            swal("Poof! Your imaginary file has been deleted!", {
                                                                icon: "success",
                                                            }).then(() => {
                                                                handleDelete(item.id)
                                                            });
                                                        } else {
                                                            swal("Your imaginary file is safe!")
                                                        }
                                                    });
                                            }}>Delete
                                            </button>
                                            <button type="submit" className="ml-3 btn btn-primary">
                                                <Link to={'/edit-student/' + item.id}
                                                      style={{textDecoration: 'none', color: 'white'}}>Edit</Link>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

        </>
    )
}