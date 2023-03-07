import {createAsyncThunk} from "@reduxjs/toolkit";

import customAxios from "./api";

export const getStudents = createAsyncThunk(
    'students/getStudents',
    async ()=>{
        const res = await customAxios.get('students')
        return res.data;
    }
)
export const addStudents = createAsyncThunk(
    'students/addStudents',
    async (data)=>{
        await customAxios.post('students',data)
        const res = await customAxios.get('students')
        return res.data;
    }
)
export const deleteStudents = createAsyncThunk(
    'students/deleteStudents',
    async (id)=>{
        const r = await customAxios.delete(`students/${id}`)
        console.log(r)
        const res = await customAxios.get('students')
        return res.data;
    }
)
export const searchStudents = createAsyncThunk(
    'students/searchStudents',
    async (id)=>{
        const res = await customAxios.get(`students/${id}`)
        console.log(res.data)
        return res.data;
    }
)
export const editStudents = createAsyncThunk (
    'posts/editPost',
    async (data) => {
        console.log(data)
        await customAxios.put(`students/${data[1]}`,data[0]);
        const res = await customAxios.get('students')
        return res.data;
    }
)