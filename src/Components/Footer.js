import React, { Component } from "react";

 class Footer extends Component {
    render() {
        return (
            <div>
                <hr />
                    <div class="container">

                        <div class="row">
                            <div class="col-sm-3">
                                <img src="images/logo_1.png" alt="" width="100%" />
                            </div>
                            <div class="col-sm-3">
                                <ul class="list-unstyled mt-4 ps-5">
                                    <li class="h5 link_name">Services</li>
                                    <li><a href="#" class="text-danger a">Qualitative</a></li>
                                    <li><a href="#" class="text-danger a">Quantitative</a></li>
                                    <li><a href="#" class="text-danger a">Other Services</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-3">
                                <ul class="list-unstyled mt-4 ps-5">
                                    <li class="h5 link_name">Address</li>
                                    <li class="text-danger">akshay Nagar 1st Block !st cross, Rammurth
                                        Nagar Bangalore-<br />505646</li>

                                </ul>
                            </div>
                            <div class="col-sm-3">
                                <ul class="list-unstyled mt-4 ps-5">
                                    <li class="h5 link_name">Contact</li>
                                    <li ><a href="#" class="text-danger a">+91 9685651064</a></li>
                                    <li ><a href="#" class="text-danger a">+91 9685651064</a></li>
                                    <li ><a href="#" class="text-danger a">bkmishra2056@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div >
                        <a href="" class="icon"><i class="fa-brands fa-twitter fa-shake" ></i></a>
                        <a href="" class="icon"><i class="fa-brands fa-facebook fa-bounce" ></i></a>
                        <a href="" class="icon"><i class="fa-brands fa-instagram fa-fade" ></i></a>
                        <a href="" class="icon"><i class="fa-brands fa-linkedin fa-fade" ></i></a>
                    </div>

                    <div class="card-footer bg-dark">
                        <center><small class="text-muted" >Copyright © 2021 Aspects Fieldwork & Research | Design & Developed By Brijesh Mishra</small></center>
                    </div>
            </div>
        )
    }
}
export default Footer;