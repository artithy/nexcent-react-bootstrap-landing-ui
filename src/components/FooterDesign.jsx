import footerdesign from '../assets/footerdesign.png';

export default function FooterDesign() {
    return (
        <>
            <section className="py-5" style={{ backgroundColor: "#ffffff", paddingTop: "80px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <img
                                src={footerdesign}
                                alt="FooterDesign"
                                className="img-fluid"
                                style={{ width: "100%", maxWidth: "550px" }}
                            />

                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <h2 className="fw-bold mb-3"
                                style={{ fontSize: "36px", color: "#263238", lineHeight: "1.3" }}
                            >
                                How to design your site footer like<br />
                                we did

                            </h2>

                            <p className="text-muted mb-4" style={{ maxWidth: "480px" }}>
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                            </p>

                            <button className="btn px-4 py-2 text-white fw-semibold"
                                style={{ backgroundColor: "#4CAF4F", borderRadius: "6px" }}
                            >
                                Learn More

                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}