import pixelgrade from '../assets/pixelgrade.png';

export default function Pixelgrade() {
    return (
        <>
            <section className="py-5" style={{ backgroundColor: "#ffffff", paddingTop: "80px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <img
                                src={pixelgrade}
                                alt="Pixelgrade Logo"
                                className="img-fluid"
                                style={{ width: "100%", maxWidth: "550px" }}
                            />

                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <h2 className="fw-bold mb-3"
                                style={{ fontSize: "36px", color: "#263238", lineHeight: "1.3" }}
                            >
                                The unseen of spending three <br />
                                years at Pixelgrade

                            </h2>

                            <p className="text-muted mb-4" style={{ maxWidth: "480px" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                                Pellentesque placerat vestibulum lorem sed porta.
                                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                                Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
                                Donec elementum pulvinar odio.
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