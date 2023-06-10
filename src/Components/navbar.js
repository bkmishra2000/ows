import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light nav" style={{zIndex:'+1'}}>
                    <div class="container">
                        <div class="" style={{width: '100%'}}>
                            <a class="navbar-brand" href="footer.html">
                                <img src="images/logo_2.png" width="40%" alt="" />
                            </a>
                            <button class="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About Us</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">service_1</a></li>
                                        <li><a class="dropdown-item" href="#">service_2</a></li>
                                        <li><a class="dropdown-item" href="#">service_3</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/indusrty">Industry</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="">Coverage</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contect">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}