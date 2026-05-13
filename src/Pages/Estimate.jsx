import  { useState } from "react";
import Navbar from "../components/Navbar";

const Estimate = () => {

  const rates = [
    { ton: "1 Ton", rate: 25 },
    { ton: "2-3 Ton", rate: 30 },
    { ton: "4 Ton", rate: 35 },
    { ton: "5 Ton", rate: 40 },
    { ton: "6 Ton", rate: 45 },
    { ton: "7-10 Ton", rate: 50 },
    { ton: "11-12 Ton", rate: 55 },
    { ton: "13-18 Ton", rate: 60 },
    { ton: "19-20 Ton", rate: 65 },
    { ton: "21-25 Ton", rate: 85 },
    { ton: "26-30 Ton", rate: 90 },
    { ton: "31-42 Ton", rate: 110 },
  ];

  const [km, setKm] = useState("");

  return (
    <>
      <Navbar />

      <div className="container-fluid mt-4">

        <div className="card shadow-lg border-0">

          <div className="card-header text-center bg-primary text-white">
            <h2>Estimate Calculator</h2>
          </div>

          <div className="card-body">

            {/* KM Input */}
            <div className="row mb-4">
              <div className="col-md-4 mx-auto">
                <input
                  type="number"
                  className="form-control form-control-lg text-center"
                  placeholder="Enter K.M"
                  value={km}
                  onChange={(e) => setKm(e.target.value)}
                />
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">

              <table className="table table-bordered text-center">

                <thead>

                  <tr className="table-dark">
                    <th>Passing</th>

                    {rates.map((item, index) => (
                      <th key={index}>
                        {item.ton}
                      </th>
                    ))}
                  </tr>

                  <tr className="table-primary">
                    <th>Price</th>

                    {rates.map((item, index) => (
                      <th key={index}>
                        ₹{item.rate}
                      </th>
                    ))}
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <th className="table-warning">
                      Total Fare
                    </th>

                    {rates.map((item, index) => (
                      <td
                        key={index}
                        className="fw-bold text-success"
                      >
                        ₹
                        {km
                          ? Number(km) * item.rate
                          : 0}
                      </td>
                    ))}
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Estimate;