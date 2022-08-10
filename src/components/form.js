import React, {useState, useEffect} from "react";

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
<form onSubmit={handleFormSubmit}>
    <input type='text' name='username' placeholder='Enter Your GitHub username' />
    <input type='submit' className='submitBtn' value='Submit' />
</form>
</>
  )
}

export default Form;