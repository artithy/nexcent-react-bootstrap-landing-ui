import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import client7 from '../assets/client7.png';

export default function Clients() {
    return (
        <>
            <section className="py-5" style={{ backgroundColour: "#FFFFFF" }}>
                <div className="container text-center">
                    <h2 className="fw-bold mb-2">Our Client</h2>
                    <p className="text-muted mb-4">
                        We have been working with some Fortune 500+ clients
                    </p>

                    <div className="d-flex flex-wrap justify-content-center align-items-center mt-10" style={{ gap: "120px", marginTop: "50px" }}>
                        <img src={client1} alt="client" style={{ height: "30px" }} />
                        <img src={client2} alt="client" style={{ height: "30px" }} />
                        <img src={client3} alt="client" style={{ height: "30px" }} />
                        <img src={client4} alt="client" style={{ height: "30px" }} />
                        <img src={client5} alt="client" style={{ height: "30px" }} />
                        <img src={client6} alt="client" style={{ height: "30px" }} />
                        <img src={client7} alt="client" style={{ height: "30px" }} />

                    </div>
                </div>


            </section>
        </>
    );
}



