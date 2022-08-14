import React from 'react'

function Login({onChange, onLoginSubmit, loginStat}) {
  return (
    <>
      { loginStat == false ? <form id="form" onSubmit={onLoginSubmit}>
       <div className="form-outline form-white mb-4">
        <input type="username" name="username" onChange={onChange} className="form-control form-control-lg" placeholder="username" required />
        <label className="form-label">Username</label>
       </div>
       <div className="form-outline form-white mb-4">
        <input type="password" name="password"  onChange={onChange} className="form-control form-control-lg" placeholder="password" required />
        <label className="form-label">Password</label>
       </div>
      <button type="submit" className="btn btn-outline-light btn-lg px-5" >Login</button>
      </form> : null}
    </>
  )
}

export default Login