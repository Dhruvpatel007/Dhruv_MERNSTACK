// import { useState } from 'react'

// let result;
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [state,setState]= useState({
//     data:[]
//   });
//   fetch('http://localhost:5000/get')
//   .then(res => res.json())
//   .then(data => {console.log(data)});
 
//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     result = await fetch(
//       'http://localhost:5000/register', {
        
//       method: "post",
//       body: JSON.stringify({ name, email }),
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     result = await result.json();
    
    
//     if (result) {
//       alert("Data saved successfully");
//       setEmail("");
//       setName("");
//     }
//   }
//   return (
    
//     <div className='container'>
//       <div className="login-form">
//         <form onSubmit={handleOnSubmit}>

//           <h4 className="title text-center">Login</h4>
//           <div className="form-group">

//             <label htmlFor="Name" className="form-label">First Name</label>
//             <input type="text" className="form-control Name" id='FirstName' name="FirstName" placeholder="FirstName" value={name} onChange={(e) => setName(e.target.value)}/>
//             <div className="errMsg" id='FirstNameErr'></div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="">Email Id</label>
//             <input type="email" className="form-control Email" id='email' name="Email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}
//             />
//             <div className="errMsg" id='emailErr'></div>
//           </div>
//           <input type="button" className="btn btn-info btn-block btn-lg" value="Login" onClick={handleOnSubmit} />


//           <div>


//           </div>

//         </form>


//       </div>
//       <table class="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
                        
//                     </tr>
//                 </thead>
//                 {/* <tbody>
//                     {state.map((user, index) => (
//                         <>
//                             <tr key={index}>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
                               
//                             </tr>
//                         </>
//                     ))}

//                 </tbody> */}
//             </table>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------

// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link, Routes } from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/createStudent";
import EditStudent from
	"./Components/editStudent";
import StudentList from
	"./Components/studentList";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/createStudent"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/studentList"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				{/* <Switch>
				<Route exact path="/"
					component={CreateStudent} />
				<Route path="/createStudent"
					component={CreateStudent} />
				<Route path="/editStudent/:id"
					component={EditStudent} />
				<Route path="/studentList"
					component={StudentList} />
				</Switch> */}
        <Routes>
          <Route exact path="/" element={<CreateStudent/>}/>
          <Route exact path="/createStudent" element={<CreateStudent/>}/>
          <Route exact path="/editStudent/:id" element={<EditStudent/>}/>
          <Route exact path="/studentList" element={<StudentList/>}/>
          
        </Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
