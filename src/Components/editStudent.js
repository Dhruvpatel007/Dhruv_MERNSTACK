// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useNavigate, useParams } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {

	let { id } = useParams();
	
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
});

const navigate=useNavigate();
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		`http://localhost:4000/students/updateStudent/${id}`,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		navigate("/studentList")
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		`http://localhost:4000/students/updateStudent/${id}`
	)
	.then((res) => {
		const { name, email} = res.data;
		setFormValues({ name, email});
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
