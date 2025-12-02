import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

export default function Community() {
    return (

        <>
            <section className="py-5" style={{ backgroundColor: "#FFFFFF", paddingTop: "90px" }}>
                <div className="container text-center">
                    <h2 className="fw-semibold mb-2 " style={{ fontSize: "36px", color: "#263238" }}>
                        Manage your entire community <br /> in a single system

                    </h2>

                    <p className="text-muted mb-5">
                        Who is Nexcent suitable for?
                    </p>

                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="p-4 bg-white text-center shadow-sm"
                                style={{ borderRadius: "12px", height: "100%" }}
                            >
                                <img src={icon1} alt="Icon 1" style={{ height: "60px" }} className="mb-3" />
                                <h5 className="fw-bold mb-2">Membership Organizations</h5>
                                <p className="text-muted">
                                    Our membership software provides full automation
                                    of membership renewals and payments
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="p-4 bg-white text-center shadow-sm"
                                style={{ borderRadius: "12px", height: "100%" }}
                            >
                                <img src={icon2} alt="Icon 2" style={{ height: "60px" }} className="mb-3" />
                                <h5 className="fw-bold mb-2">National Associations</h5>
                                <p className="text-muted">
                                    Our membership management software provides full automation
                                    of membership renewals and payments
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="p-4 bg-white text-center shadow-sm"
                                style={{ borderRadius: "12px", height: "100%" }}
                            >
                                <img src={icon3} alt="Icon 3" style={{ height: "60px" }} className="mb-3" />
                                <h5 className="fw-bold mb-2">Clubs And Groups</h5>
                                <p className="text-muted">
                                    Our membership management software provides full automation
                                    of membership renewals and payments
                                </p>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}
