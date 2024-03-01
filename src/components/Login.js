import React from 'react'

const Login = () => {
  return (


<div className='container d-flex justify-content-center align-items-center vh-100'>
<div className="p-4 border rounded-3">
  <h2 className="text-center mb-4">Login</h2>
  <form>
    <div className="row">
    <div className="mb-3 col-12">
      <label htmlFor="username" className="form-label">Username</label>
      <input type="text" className="form-control" id="username" placeholder="Enter username" />
    </div>
    <div className="mb-3 col-12">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Enter password" />
    </div>
    </div>
    <div className='text-center mt-3'>
    <button type="submit" className='btn border px-4'>Submit</button>
    </div>
  </form>
</div>
</div>
  )
}

export default Login