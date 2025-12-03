import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

export default function BlogSection() {
    return (
        <>
            <section>
                <div className="container text-center">
                    <h2 className="fw-bold mt-5"
                        style={{ fontSize: "36px", lineHeight: "1.3" }}
                    >
                        Caring is the new marketing
                    </h2>

                    <p className="text-muted mb-5" style={{ maxWidth: "650px", margin: "auto" }}>
                        The Nexcent blog is the best place to read about the latest membership insights,
                        trends and more. See who's joining the community, read about how our community
                        are increasing their membership income and lot's more.

                    </p>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative">
                                <img src={blog1} alt="Blog 1" className="img-fluid rounded " style={{ height: "260px", width: "100%", objectFit: "cover" }} />
                                <div className="shadow-sm p-4 bg-white"
                                    style={{
                                        borderRadius: "12px",
                                        position: "absolute",
                                        left: "50%",
                                        bottom: "-40px",
                                        transform: "translateX(-50%)",
                                        width: "85%",
                                    }}
                                >
                                    <h5 className="fw-semibold mb-3">
                                        Creating Streamlined Safeguarding Processes with OneRen
                                    </h5>


                                    < a href="#" className="fw-semibold" style={{ color: "#4CAF4F", textDecoration: "none" }}>
                                        Readmore →
                                    </a>
                                </div>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative">
                                <img src={blog2} alt="Blog 1" className="img-fluid rounded " style={{ height: "260px", width: "100%", objectFit: "cover" }} />
                                <div className="shadow-sm p-4 bg-white"
                                    style={{
                                        borderRadius: "12px",
                                        position: "absolute",
                                        left: "50%",
                                        bottom: "-40px",
                                        transform: "translateX(-50%)",
                                        width: "85%",
                                    }}
                                >
                                    <h5 className="fw-semibold mb-3">
                                        What are your safeguarding responsibilities and how can you manage them?
                                    </h5>


                                    < a href="#" className="fw-semibold" style={{ color: "#4CAF4F", textDecoration: "none" }}>
                                        Readmore →
                                    </a>
                                </div>

                            </div>

                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative">
                                <img src={blog3} alt="Blog 1" className="img-fluid rounded " style={{ height: "260px", width: "100%", objectFit: "cover" }} />
                                <div className="shadow-sm p-4 bg-white"
                                    style={{
                                        borderRadius: "12px",
                                        position: "absolute",
                                        left: "50%",
                                        bottom: "-40px",
                                        transform: "translateX(-50%)",
                                        width: "85%",
                                    }}
                                >
                                    <h5 className="fw-semibold mb-3">
                                        Revamping the Membership Model with Triathlon<br /> Australia
                                    </h5>


                                    < a href="#" className="fw-semibold" style={{ color: "#4CAF4F", textDecoration: "none" }}>
                                        Readmore →
                                    </a>
                                </div>

                            </div>

                        </div>




                    </div>
                </div>
            </section>
        </>
    );
}