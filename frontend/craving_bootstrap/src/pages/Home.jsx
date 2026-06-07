function Home() {
  return (
    <>
      <div className="hero-section">

        <div className="hero-content">

          <h1 class=" text-white p-3 rounded">
            Your Favorite Food,
            <br />
            Delivered Fast
          </h1>

          <p>
            Order from restaurants near you
          </p>

          <div className="hero-buttons">

            <button className="btn btn-danger">
              Sign Up
            </button>

            <button className="btn btn-light">
              Order Now
            </button>

          </div>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search restaurants or dishes..."
            />

          </div>

        </div>

      </div>
    </>
  );
}

export default Home;