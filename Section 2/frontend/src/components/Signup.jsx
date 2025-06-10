import React, { useState } from 'react';
import ShowAlert from './ShowAlert';


const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cnfPassword, setCnfPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showCnfPassword, setShowCnfPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const [success,setSuccess]=useState("")


  // const Swal = require('sweetalert2');


  const hendelSignUp = () => {
    if (!name.trim() || !email.trim() || !password.trim() || !cnfPassword.trim()) {
      setError("All filed is requird")

      return;
    }
    if (password.trim() !== cnfPassword.trim()) {
      setError("password dosen't match")
      return;
    }
    try {
      setLoading(true);
      // console.log("Name:", name)
      // console.log("Email:", email)
      // console.log("Password:", password)
      // window.alert([name, email]);

      setSuccess("Successfull")
    
      setName("")
      setEmail('')
      setPassword('')
      setCnfPassword('');
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }

  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 mt-5">
      <div>



        <h3 className='text-center text-xl font-bold'>Sign Up</h3>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 py-2">Name<span className='text-red-500'>*</span></label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"

          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 py-2">Email<span className='text-red-500'>*</span></label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"

          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 py-2">Password<span className='text-red-500'>*</span></label>
          <div className='flex relative '>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <div className='' style={{ position: "absolute", right: 10 }}>
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <i class="fa-solid fa-eye mt-4 " ></i> : <i class="fa-solid fa-eye-slash mt-4"></i>}
              </span>

            </div>
          </div>

        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 py-2">Confirm Password<span className='text-red-500'>*</span></label>
          <div className='flex relative'>
            <input
              type={showCnfPassword ? "text" : "password"}
              value={cnfPassword}
              id="confirmPassword"
              onChange={(e) => setCnfPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"

            />
            <div style={{ position: "absolute", right: 10 }}>
              <button type='button' onClick={() => setShowCnfPassword(!showCnfPassword)}>
                {showCnfPassword ? <i class="fa-solid fa-eye mt-4 " ></i> : <i class="fa-solid fa-eye-slash mt-4"></i>}
              </button>
            </div>
          </div>

        </div>
        <button
          type='button'
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 mt-5"
          onClick={hendelSignUp}
          disabled={loading}
        >
          {
            loading ? "Please wait..." : "Submit"
          }

        </button>

      </div>
      <ShowAlert errorMsg={error} successMag={success} setErrormsg={setError} setSuccessMsg={setSuccess} />
    </div>
  )
}

export default Signup
