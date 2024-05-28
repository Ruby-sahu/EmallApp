import { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <header className="tm-header" id="tm-header">
                <div className="tm-header-wrapper">
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="tm-site-header">
                        <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>
                        <h1 className="text-center">Emall App</h1>
                    </div>
                    <nav className="tm-nav" id="tm-nav">
                        <ul>
                            <li className="tm-nav-item active"><Link to="/" className="tm-nav-link">
                                <i className="fas fa-home"></i>
                                Home
                            </Link></li>
                            <li className="tm-nav-item"><Link to="/Categories" className="tm-nav-link">
                                <i className="fas fa-pen"></i>
                                Category
                            </Link></li>
                            <li className="tm-nav-item"><Link to="/Brands" className="tm-nav-link">
                                <i className="fas fa-users"></i>
                                Brands
                            </Link></li>
                            <li className="tm-nav-item"><Link to="/Products" className="tm-nav-link">
                                <i className="far fa-comments"></i>
                                Products
                            </Link></li>
                            <li className="tm-nav-item"><Link to="/Contact" className="tm-nav-link">
                                <i className="far fa-comments"></i>
                                Contact
                            </Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}