import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-center mb-5 fw-bold">
          {/* Welcome to BLACKBUCK */}
        </h1>

        <div className="row g-4">

          {/* Find Loads */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 h-100 text-center p-4">
              <h3 className="mb-3">Find Loads</h3>
              {/* <p>Search truck loads easily across India.</p> */}

              <Link to="/findloads" className="btn btn-primary mt-3">
                Open
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 h-100 text-center p-4">
              <h3 className="mb-3">Estimate price</h3>
              {/* <p>Search truck loads easily across India.</p> */}

              <Link to="/estimate" className="btn btn-primary mt-3">
                Open
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 h-100 text-center p-4">
              <h3 className="mb-3">Products</h3>
              {/* <p>View all truck and transport products.</p> */}

              <Link to="/products" className="btn btn-success mt-3">
                Open
              </Link>
            </div>
          </div>

          {/* Helpline */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 h-100 text-center p-4">
              <h3 className="mb-3">Helpline</h3>
              {/* <p>Contact support and customer care.</p> */}

              <Link to="/helpline" className="btn btn-danger mt-3">
                Open
              </Link>
            </div>
          </div>

          {/* Terms */}
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 h-100 text-center p-4">
              {/* <h3 className="mb-3">Terms & Conditions</h3>
              <p>Read all terms and conditions carefully.</p> */}

              <Link to="/terms" className="btn btn-dark mt-3">
                Open
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;