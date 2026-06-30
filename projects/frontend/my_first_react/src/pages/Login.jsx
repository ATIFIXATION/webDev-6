import { useState } from "react";

function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container mt-5 border border-info-subtle rounded p-4 bg-primary">

        <div className="border p-4 w-50 mx-auto shadow rounded bg-light">

          <h2 className="text-center mb-4">
            Welcome Back
          </h2>

          <form className="form-control bg-info" >

            <div className="mb-3">

              <label className="form-label">
                Full Name
              </label>
              
              <br/>


              <input

              class="bg-info-subtle w-100 border border-black rounded-1 box-shadow black"
                type="text"
                className="form-control"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Username
              </label>

              <input

               class="bg-info-subtle w-100 border border-black rounded-1 box-shadow black"
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Password
              </label>

              <input
               class="bg-info-subtle w-100 border border-black rounded-1 box-shadow black"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button
            class="bg-info justify-content-center w-100 border border-success rounded "
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Login;