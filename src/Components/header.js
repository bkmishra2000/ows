import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-sm bg-light fixed-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-lg-6 col-md-6">
                                <Link class="navbar-brand" to="#">
                                    <img src="images/logo_2.png" width="40%" />
                                </Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{ marginLeft: '10%' }}>
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div class="col-sm-6 col-lg-6 col-md-6 my-4" >
                                <div class="collapse navbar-collapse " id="collapsibleNavbar" >
                                    <ul class="navbar-nav navbar-right">
                                        <li class="nav-item">
                                            <Link class="nav-link" to="">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/about">About Us</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Services</Link>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to="#">service_1</Link></li>
                                                <li><Link class="dropdown-item" to="#">service_2</Link></li>
                                                <li><Link class="dropdown-item" to="#">service_3</Link></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="#">Industry</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="#">Coverage</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/contect">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}