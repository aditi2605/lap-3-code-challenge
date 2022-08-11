import React, {useState, useEffect} from "react";
import axios from "axios";
import { getResult} from '../actions';

const Form = ({ getResult }) =>  {
      const [formData, setFormData] = useState({username: ''})
      const [fetchdata, setfetchData] = useState('')

      const handleFormSubmit = (e) =>{
      console.log("form target is: ", e.target.username)
      e.preventDefault()
      setFormData({username: e.target.username.value})
      e.target.username.value = '';
    }

      const updateInput = (e) => {
        e.preventDefault();
        useEffect (() => {
          async function fetchData() {
            const data = await axios.get('../getResult/actions', formData)
            setfetchData(data);
          }
          fetchData()
       
        })
      
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