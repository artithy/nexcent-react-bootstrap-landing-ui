import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-white py-3 shadow-sm'>
                <div className='container-fluid'>

                    <a className='navbar-brand d-flex align-items-center gap-2 ' href='#'>
                        <img
                            src={logo}
                            style={{ width: '28px', height: '28px' }}
                            alt='logo'
                        />
                        <span className="fw-bold fs-4" style={{ color: '#263238' }}>
                            Nexcent
                        </span>
                    </a>

                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#mainNav'
                    >
                        <span className='navbar-toggler-icon'></span>

                    </button>

                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 gap-3">
                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">
                                    Features
                                </a>

                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">
                                    Community
                                </a>

                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">
                                    Blog
                                </a>

                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium" href="#">
                                    Pricing
                                </a>

                            </li>

                        </ul>

                        <a
                            href="#"
                            className="btn ms-lg-4 mt-3 mt-lg-0 px-4 py-2 text-white fw-semibold d-flex align-items-center gap-2"
                            style={{ backgroundColor: "#4CAF4F", borderRadius: "6px", }}
                        >
                            Register Now
                            <span style={{ fontSize: "1.2rem", marginTop: "2px" }}>→</span>

                        </a>

                    </div>
                </div>

            </nav >

        </>
    )
}