import React, { useState } from 'react'
import axios from "axios"
import 'react-hot-toast';


const CreateUser = () => {
    const [value,setValue] = useState({
        name : "",
        email : "",
        phone : ""
    })
    const handleChange = (e)=>{
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            const adduser = await axios.post("http://localhost:4000/api/CreateUser",value)
            const response = adduser.data
            if(response.success){
                toast.success(response.Message)
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        console.log(value)
        setValue({
          name: "",
          email: "",
          phone: ""
      });
        
    }
  return (
    <div>
<button type="button" class="btn btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{backgroundColor:'#38598b'}}>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg> New User
</button>

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <form onSubmit={handleSubmit}>
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User Information</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" name="name" value={value.name} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter User Name"/>
  
 
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" name="email" value={value.email} onChange={handleChange}  id="exampleFormControlInput1" placeholder="Enter User Email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
  <input type="text" class="form-control" name="phone" value={value.phone} onChange={handleChange}  id="exampleFormControlInput1" placeholder="Enter Phone No."/>
  
 
</div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-secondary" data-bs="modal" data-bs-dismiss="modal">Submit</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default CreateUser
