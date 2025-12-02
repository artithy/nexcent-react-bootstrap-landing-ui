import members from "../assets/members.png";
import clubs from "../assets/clubs.png";
import bookings from "../assets/bookings.png";
import payments from "../assets/payments.png";


export default function Stats() {
    return (
        <>
            <section className="py-5"
                style={{ backgroundColor: "#F5F7FA", paddingTop: "80px", paddingBottom: "80px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-3"
                                style={{ fontSize: "36px", lineHeight: "1.3" }}>
                                Helping a local<br />
                                <span style={{ color: "#4CAF4F" }}>business reinvent itself</span>
                            </h2>
                            <p className="text-muted">
                                We reached here with our hard work and dedication
                            </p>
                        </div>


                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-6 d-flex gap-3 align-items-start">
                                    <img src={members} alt="Members" style={{ height: "36px" }} />
                                    <div>
                                        <h4 className="fw-bold mb-0">2,245,341</h4>
                                        <p className="text-muted mb-0">Members</p>
                                    </div>
                                </div>

                                <div className="col-6 d-flex gap-3 align-items-start">
                                    <img src={clubs} alt="Clubs" style={{ height: "36px" }} />
                                    <div>
                                        <h4 className="fw-bold mb-0">46,328</h4>
                                        <p className="text-muted mb-0">Clubs</p>
                                    </div>
                                </div>

                                <div className="col-6 d-flex gap-3 align-items-start">
                                    <img src={bookings} alt="Cookings" style={{ height: "36px" }} />
                                    <div>
                                        <h4 className="fw-bold mb-0">828,867</h4>
                                        <p className="text-muted mb-0">Event Bookings</p>
                                    </div>
                                </div>

                                <div className="col-6 d-flex gap-3 align-items-start">
                                    <img src={payments} alt="Payments" style={{ height: "36px" }} />
                                    <div>
                                        <h4 className="fw-bold mb-0">1,926,436</h4>
                                        <p className="text-muted mb-0">Payments</p>
                                    </div>
                                </div>






                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
