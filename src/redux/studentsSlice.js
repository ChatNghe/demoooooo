import {createSlice} from "@reduxjs/toolkit";
import {addStudents, deleteStudents, editStudents, getStudents, searchStudents} from "../services/studentsServices";

const initialState = {
    students: [],
    currentStudent: []
}
const studentsSlice = createSlice({
        name: 'students',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getStudents.fulfilled, (state, action) => {
                state.students = action.payload

            });
            builder.addCase(searchStudents.fulfilled, (state, action) => {
                state.currentStudent = action.payload
            });
            builder.addCase(addStudents.fulfilled, (state, action) => {
                state.students = action.payload
            })
            builder.addCase(deleteStudents.fulfilled, (state, action) => {
                state.students = action.payload
            })
            builder.addCase(editStudents.fulfilled, (state, action) => {
                // state.students = action;
                console.log(action)
                console.log(111111111111111)
            });
        }
    }
)
export default studentsSlice.reducer;