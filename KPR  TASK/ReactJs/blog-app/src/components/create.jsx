 import React from 'react';

import { Card,Button } from 'react-bootstrap';
export default function Create(){
    // let user=useContext(userContext);
    // const[newname,setNewname]=useState(user.users[0].name);
    // const[newemail,setNewemail]=useState(user.users[0].email);
    // const[pass,setPass]=useState();
  
    // const [val,setVal]=useState("none")
    // const [fom,setFom]=useState('block')

// function handle(){
//     alert("Login Successfull");
// }
// function handleSubmit(e){
//     e.preventDefault();
//     user.users=[...user.users,{name:newname,email:newemail,balance:0}]

//     document.getElementById('name').value="";
//     document.getElementById('email').value="";
//     document.getElementById('pass').value="";

//     setVal("block")
//     setFom("none")

// }
    return(
        <Card>
        <form action="/create" method="POST">
            <div class="form-group">
       
              <label for="Title">TITLE</label>
              <input type="text" class="form-control" name="Title" required/>
            </div>
            <div class="form-group">
              <label for="Image">IMAGE</label>
              <input type="file" class="form-control" name="Image" required />
            </div>
            <div class="form-group">
              <label for="Content">CONTENT</label>
              <input type="text" class="form-control" name="Content" required />
            </div>
            <button type="submit" class="btn btn-success">ADD Blog</button>
          </form>

       </Card>
    )
}