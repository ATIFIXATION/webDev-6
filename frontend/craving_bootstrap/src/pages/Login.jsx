function Login() {
  return (
    <>
      <div className="container ">

        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card p-4 shadow">

              <h1 className="text-center text-danger mb-4">
                Welcome Back
              </h1>

              <form class="p-3 bg-danger text-black border border-black rounded-2">

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Enter your password"
              />

              <button className="btn btn-danger w-100 ">
                Login
              </button>
                </form>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;