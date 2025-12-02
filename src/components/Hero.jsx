import hero from '../assets/hero.png';

export default function Hero() {
    return (
        <section className="py-5" style={{ backgroundColor: '#F5F7FA' }}>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <h1 className="fw-bold mb-3" style={{ fontSize: "48px", lineHeight: "1.2" }}>
                            Lessons and insights <br />
                            <span style={{ color: "#4CAF4F" }}>from 8 years</span>
                        </h1>

                        <p className="text-muted mb-4">
                            Where to grow your business as a photographer: site or social media?
                        </p>

                        <a
                            href="#"
                            className="btn px-4 py-2 text-white fw-semibold"
                            style={{ backgroundColor: "#4CAF4F", borderRadius: "6px" }}
                        >
                            Register
                        </a>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={hero}
                            alt="Hero"
                            className="img-fluid"
                            style={{ maxHeight: "420px" }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
