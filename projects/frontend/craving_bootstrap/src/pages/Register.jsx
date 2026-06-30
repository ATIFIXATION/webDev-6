import foodVideo from "../assets/videos/video.mp4";

function Register() {
  return (
    <>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={foodVideo} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="container"></div>

      <div className="container  ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card register-glass p-4 shadow mt-5 border border-black rounded-4">
              <h1 className="text-center text-danger m-4 border border-black rounded-2 gap-3">
                Create Account
              </h1>

              <form class="p-3 bg-danger text-black border border-black rounded-2">
                <input
                  type="text  "
                  className="form-control mb-3 "
                  placeholder="Enter your name"
                />

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

                <button className="btn btn-danger w-100 border border-dark rounded-1">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
