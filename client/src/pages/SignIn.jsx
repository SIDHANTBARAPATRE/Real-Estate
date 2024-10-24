import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {

  const [formData, setFormData] = useState({}); //taken as object-> {}
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch  = useDispatch();


  const handleChange = (e)=> {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      // Check if signup failed
      if (data.success === false) {  // Corrected here //error function created in index.js
        dispatch(signInFailure(data.message));
        return;
      }
  
      // If signup is successful, navigate to sign-in page
      dispatch(signInSuccess(data));
      navigate('/');  // Navigate after successful signup
    } catch (error) {
     dispatch(signInFailure(error.message));
    }
  };
  


  return (
    <div className = 'p-3 max-w-lg mx-auto'>
      <h1 className = 'text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit = {handleSubmit} className  = "flex flex-col gap-4">
        <input type ="email" placeholder = "email" className = "border p-3 rounded-lg" id = "email" onChange = {handleChange}></input>
        <input type ="password" placeholder = "password" className = "border p-3 rounded-lg" id = "password" onChange = {handleChange}></input>
        <button disabled = {loading} className = "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" >{loading ?  "Loading..." : "Sign In"}</button>
      </form>
      <div className onChange = {handleChange}ame = "flex gap-2 mt-5">
        <p>Dont have an acoount</p>
        <Link to={"/sign-up"}>
        <span className = "text-blue-700">
          Sign Up</span></Link>
      </div>
      <OAuth />
      {error && <p className = "text-red-500 mt-5">{error}</p>}
    </div>
  )
}
