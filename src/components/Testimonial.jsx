import testimonial from "../assets/testimonial.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

export default function Testimonial() {
    return (<>
        <section className="py-5"
            style={{
                backgroundColor: "#F5F7FA",
                paddingTop: "80px",
                paddingBottom: "80px",
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-center mb-4 mb-lg-0 ml-3">
                        <img
                            src={testimonial}
                            className="img-fluid rounded"
                            style={{ width: "100%", borderRadius: "12px" }}
                        />

                    </div>

                    <div className="col-lg-7">
                        <p className="text-muted " style={{ lineHeight: "1.7" }}>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.

                        </p>
                        <h5 className="fw-bold mt-4" style={{ color: "#4CAF4F" }}>
                            Tim Smith
                        </h5>
                        <p className="text-muted mb-4 ">
                            British Dragon Boat Racing Association
                        </p>

                        <div className="d-flex flex-wrap align-items-center gap-4 mb-3">
                            <img src={logo1} style={{ height: "35px" }} />
                            <img src={logo2} style={{ height: "35px" }} />
                            <img src={logo3} style={{ height: "35px" }} />
                            <img src={logo4} style={{ height: "35px" }} />
                            <img src={logo5} style={{ height: "35px" }} />
                            <img src={logo6} style={{ height: "35px" }} />
                            <a href="#"
                                className="fw-semibold"
                                style={{
                                    color: "#4CAF4F",
                                    fontSize: "16px",
                                    textDecoration: "none",
                                }}>
                                Meet all customers →
                            </a>
                        </div>


                    </div>

                </div>

            </div>
        </section >
    </>);
}