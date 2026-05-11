import 'react'

const Helpline = () => {
  return (
    <>
     <section className="helpline-section py-5">

        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">

            <h1 className="fw-bold text-danger">
              Helpline Numbers
            </h1>

            <p className="text-light fs-5">
              Contact Our Support Team 24×7
            </p>

          </div>

          <div className="row g-4">

            {/* Customer Support */}
            <div className="col-lg-4 col-md-6">

              <div className="help-card text-center">

                <div className="icon-box">
                  <i className="bi bi-headset"></i>
                </div>

                <h3>Customer Support</h3>

                <p>
                  General Help & Assistance
                </p>

                <a href="tel:8044739800" className="help-number">
                  +91 8044739800
                </a>

              </div>

            </div>

            {/* Payment Support */}
            <div className="col-lg-4 col-md-6">

              <div className="help-card text-center">

                <div className="icon-box">
                  <i className="bi bi-credit-card"></i>
                </div>

                <h3>Payment Support</h3>

                <p>
                  Payment & Refund Queries
                </p>

                <a href="tel:8044739801" className="help-number">
                  +91 8044739801
                </a>

              </div>

            </div>

            {/* Transport Support */}
            <div className="col-lg-4 col-md-6">

              <div className="help-card text-center">

                <div className="icon-box">
                  <i className="bi bi-truck"></i>
                </div>

                <h3>Transport Support</h3>

                <p>
                  Load & Transport Assistance
                </p>

                <a href="tel:8044739802" className="help-number">
                  +91 8044739802
                </a>

              </div>

            </div>

            {/* Complaint Support */}
            <div className="col-lg-4 col-md-6">

              <div className="help-card text-center">

                <div className="icon-box">
                  <i className="bi bi-exclamation-circle"></i>
                </div>

                <h3>Complaint Desk</h3>

                <p>
                  Register Complaints
                </p>

                <a href="tel:8044739803" className="help-number">
                  +91 8044739803
                </a>

              </div>

            </div>

            {/* Verification */}
            <div className="col-lg-4 col-md-6">

              <div className="help-card text-center">

                <div className="icon-box">
                  <i className="bi bi-patch-check"></i>
                </div>

                <h3>KYC Verification</h3>

                <p>
                  Account & Document Verification
                </p>

                <a href="tel:8044739804" className="help-number">
                  +91 8044739804
                </a>

              </div>

            </div>

            {/* Emergency */}
            <div className="col-lg-4 col-md-6">

              <div className="help-card text-center">

                <div className="icon-box">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <h3>Emergency Support</h3>

                <p>
                  24×7 Emergency Assistance
                </p>

                <a href="tel:8044739805" className="help-number">
                  +91 8044739805
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Helpline