import { useState } from "react";
 
const PatientForm = () => {
   
 
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [department, setDepartment] = useState("");
 
const [patient, setPatient] = useState([]);
 
 
 
 const handleSubmit = (e) => {
 
        e.preventDefault();
 
        let newPatient= { name, age, department};
 
 
         setPatient([...patient, newPatient]);
 
         setName("");
         setAge("");
         setDepartment("");
 
         console.log(patient);
 
 
    }
 
const handleDelete = (index) => {
    setPatient(patient.filter((p, i) => i !== index)
);}
 
 
 
 return(
<>
<h1>Patient Form</h1>
 <form onSubmit={handleSubmit}>
   
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                   
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                   
                />
 
                <button type="submit">
                    Add Patient
                </button>
            </form>
 
              <ul>
                <h2>Patients</h2>
              {patient.map((patient, index) => {
                    return (
                       
                        <li key={index}>
                         Number: {index} Name: {patient.name}  Age: {patient.age}  Department: {patient.department}
 
                        <button onClick={() => handleDelete(index)}>
    Delete
</button>
                           </li>
              );
              }
              )}
 
             
            </ul>
 
 
 
</>
   
   )
}
   
 
 
 
export default PatientForm;