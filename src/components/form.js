import React, {useState, useEffect} from "react";
import axios from "axios";

function Form() {
    const [formData, setFormData] = useState({username: ''})

 
function handleFormSubmit(e){
  console.log("form target is: ", e.target.username)
    e.preventDefault()
    setFormData({username: e.target.username.value})
    e.target.username.value = '';
}
  return (
<>
<form role='form' onSubmit={handleFormSubmit}>
    <input type='text' name='username' placeholder='Enter Your GitHub username' />
    <input aria-lable="Location" type='submit' className='submitBtn' value='Search' onChange={updateInput}/>
</form>
</>
  )
}

export default Form;