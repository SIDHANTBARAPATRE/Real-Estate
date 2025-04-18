import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import OAuth from '../components/OAuth';

export default function SignUp() {

  const [formData, setFormData] = useState({}); //taken as object-> {}
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e)=> {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      // Check if signup failed
      if (data.success === false) {  // Corrected here //error function created in index.js
        setLoading(false);
        setError(data.message);
        return;
      }
  
      // If signup is successful, navigate to sign-in page
      setLoading(false);
      setError(null);
      navigate('/sign-in');
      alert("Account created Successfully, please Sign in")  // Navigate after successful signup
    } 
    catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  


  return (
    <div className = 'p-3 max-w-lg mx-auto'>
      <h1 className = 'text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit = {handleSubmit} className  = "flex flex-col gap-4">
        <input type ="text" placeholder = "username" className = "border p-3 rounded-lg" id = "username" onChange = {handleChange}></input>
        <input type ="email" placeholder = "email" className = "border p-3 rounded-lg" id = "email" onChange = {handleChange}></input>
        <input type ="password" placeholder = "password" className = "border p-3 rounded-lg" id = "password" onChange = {handleChange}></input>
        <button disabled = {loading} className = "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" >{loading ?  "Loading..." : "Sign Up"}</button>
      </form>
      <div className onChange = {handleChange}ame = "flex gap-2 mt-5">
        <p>Have an acoount</p>
        <Link to={"/sign-in"}>
        <span className = "text-blue-700">
          Sign in</span></Link>
      </div>
      <OAuth />
      {error && <p className = "text-red-500 mt-5">{error}</p>}
    </div>
  )
}
