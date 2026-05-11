import 'react'

const Products = () => {
    return (
        <>
            <section className="bg-black text-white py-4 min-vh-100">

                <div className="container">

                    {/* Heading */}
                    <div className="text-center mb-2">

                        <h1 className="fw-bold text-danger display-5">
                            Our Products
                        </h1>

                        <p className="fs-5 text-light">
                            Smart Services For Transporters
                        </p>

                    </div>

                    {/* Products Row */}
                    <div className="row g-4">

                        {/* GPS */}
                        <div className="col-lg-3 col-md-6">

                            <div className="card bg-dark text-white border-0 shadow-lg h-100 rounded-4 overflow-hidden">

                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2023/9/348589148/CJ/XR/KW/187881644/truck-gps-tracking-service-500x500.jpg"
                                    alt="gps"
                                    className="card-img-top product-img"
                                />

                                <div className="card-body text-center p-4">

                                    <h3 className="fw-bold mb-3">
                                        GPS Tracking
                                    </h3>

                                    <p className="text-secondary">
                                        Live truck tracking with real-time location updates.
                                    </p>

                                    <button className="btn btn-danger rounded-pill px-4">
                                        Learn More
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* FASTag */}
                        <div className="col-lg-3 col-md-6">

                            <div className="card bg-dark text-white border-0 shadow-lg h-100 rounded-4 overflow-hidden">

                                <img
                                    src="https://images.seeklogo.com/logo-png/52/1/fastag-logo-png_seeklogo-526890.png"
                                    alt="fastag"
                                    className="card-img-top product-img"
                                />

                                <div className="card-body text-center p-4">

                                    <h3 className="fw-bold mb-3">
                                        FASTag
                                    </h3>

                                    <p className="text-secondary">
                                        Easy toll payments with quick recharge and smooth travel.
                                    </p>

                                    <button className="btn btn-danger rounded-pill px-4">
                                        Learn More
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* Diesel Card */}
                        <div className="col-lg-3 col-md-6">

                            <div className="card bg-dark text-white border-0 shadow-lg h-100 rounded-4 overflow-hidden">

                                <img
                                    src="https://www.wessexfleet.co.uk/assets/images/fuel-card.jpg"
                                    alt="diesel"
                                    className="card-img-top product-img"
                                />

                                <div className="card-body text-center p-4">

                                    <h3 className="fw-bold mb-3">
                                        Diesel Card
                                    </h3>

                                    <p className="text-secondary">
                                        Save more on fuel with secure diesel card payments.
                                    </p>

                                    <button className="btn btn-danger rounded-pill px-4">
                                        Learn More
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* Super Loads */}
                        <div className="col-lg-3 col-md-6">

                            <div className="card bg-dark text-white border-0 shadow-lg h-100 rounded-4 overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                                    alt="superloads"
                                    className="card-img-top product-img"
                                />

                                <div className="card-body text-center p-4">

                                    <h3 className="fw-bold mb-3">
                                        Super Loads
                                    </h3>

                                    <p className="text-secondary">
                                        Find high-paying verified loads instantly.
                                    </p>

                                    <button className="btn btn-danger rounded-pill px-4">
                                        Learn More
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Products