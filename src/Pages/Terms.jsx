import 'react'

const Terms = () => {
    return (
        <>
            <section className="eligible-section">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-10">

                            {/* Card */}
                            <div className="card eligible-card border-0 shadow-lg">

                                <div className="card-body p-lg-5 p-4">

                                    {/* Heading */}
                                    <div className="text-center mb-5">

                                        <h1 className="fw-bold text-danger">
                                            Eligible Criteria
                                        </h1>

                                        <p className="text-light fs-5 mt-3">
                                            After Paid Plan Activation
                                        </p>

                                    </div>

                                    {/* Content */}
                                    <div className="eligible-content">

                                        <p>
                                            Bhagwan na kare agar aage jaake app ko load ka paisa nahi
                                            milta hai toh hamari company aapko{" "}
                                            <span className="text-danger fw-bold">
                                                upto ₹10,000
                                            </span>{" "}
                                            tak pay karegi.
                                        </p>

                                        <p>
                                            Iske liye aapko{" "}
                                            <span className="fw-bold text-warning">
                                                15 din ke andar complaint
                                            </span>{" "}
                                            karna hota hai. Aapka issue{" "}
                                            <span className="fw-bold text-warning">
                                                60 din ke andar
                                            </span>{" "}
                                            solve ho jaata hai. Agar 60 din ke andar solve nahi hota
                                            hai toh hamari company aapko upto ₹10,000 tak payment
                                            karegi.
                                        </p>

                                        {/* Terms */}
                                        <div className="terms-box mt-4">

                                            <h4 className="fw-bold text-danger mb-4">
                                                Terms & Conditions
                                            </h4>

                                            <ul className="terms-list">

                                                <li>
                                                    Aapko minimum transporter se{" "}
                                                    <span className="text-warning fw-bold">
                                                        70% advance payment
                                                    </span>{" "}
                                                    lena hoga.
                                                </li>

                                                <li>
                                                    Aapka{" "}
                                                    <span className="text-warning fw-bold">
                                                        KYC full verified
                                                    </span>{" "}
                                                    hona chahiye.
                                                </li>

                                                <li>
                                                    Aapko{" "}
                                                    <span className="text-warning fw-bold">
                                                        15 din ke andar complaint
                                                    </span>{" "}
                                                    karna hoga POD ke saath.
                                                </li>

                                                <li>
                                                    Material damage, theft ya shortage of product nahi
                                                    hona chahiye.
                                                </li>

                                                <li>
                                                    Load lene se pehle aapko{" "}
                                                    <span className="text-danger fw-bold">
                                                        8044739800
                                                    </span>{" "}
                                                    par call karke load details dena hoga jaise:
                                                    advance payment, loading-unloading location aur
                                                    transport details.
                                                </li>

                                                <li>
                                                    Agar aap load details call karke nahi denge toh
                                                    payment guarantee valid nahi hogi.
                                                </li>

                                            </ul>

                                        </div>

                                        {/* Button */}
                                        <div className="text-center mt-3">

                                            <button className="btn btn-danger px-5 py-3 fw-bold rounded-pill">
                                                Learn More
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Terms