const Footer = () => {
    return (
        <div className="container">
            <div className="row py-5">

                <div className="col-lg-12  text-white text-center">
                    <h1 className="display-3 ">Bootstrap footer</h1>
                    <p className="lead mb-0">This footer is created by using Bootstrap.</p>
                    <p className="lead py-3">Snippet by BBBootstrap.</p>
                </div>


                <footer className="bg-white">
                    <div className="container py-5">
                        <div className="row py-3">

                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                                <ul className="list-unstyled mb-0 noHover">
                                    <li className="mb-2"><a href="#" className="text-muted">Contact Us</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">About Us</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Stories</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Press</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
                                <ul className="list-unstyled mb-0 noHover">
                                    <li className="mb-2"><a href="#" className="text-muted">Payments</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Shipping</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Cancellation</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Returns</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Policy</h6>
                                <ul className="list-unstyled mb-0 noHover">
                                    <li className="mb-2"><a href="#" className="text-muted">Return Policy</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Terms Of Use</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Security</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Privacy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                                <ul className="list-unstyled mb-0 noHover">
                                    <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Sitemap</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                                <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                            </div>
                        </div>
                    </div>
                    <hr className="p-0 m-0 b-0" />


                    <div className="bg-light py-2">
                        <div className="container text-center">
                            <p className="text-muted mb-0 py-2">&copy; 2023 AAHAAR - All risghts reserved.</p>

                        </div>
                    </div>

                </footer>
            </div>
        </div>
    );
};
export default Footer;