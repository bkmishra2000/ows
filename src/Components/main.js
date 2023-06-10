import React, { Component } from "react";
import Industry from "./Industry";
import Contact from "./contact";
import About from "./About";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-6 main">
                            <h1 class="mt-5  p-5" style={{ fontSize: '60px', fontWeight: 'bolder', color: '#fff' }}><b>Aspects Fieldwork & Research</b></h1>
                            <center class="wow fadeInUp"><b style={{ fontSize: '20px' }}>REDIRECTING CURIOSITY IN THE RIGHT DIRECTION</b></center>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 main1">
                            <h1 class="mt-5 p-5" style={{ fontSize: '60px', fontWeight: 'bolder', color: '#fff' }}>Know your Audience</h1>
                            <p><b>Identify and understand on what stage your audience is and make a compelling
                                strategy to convert them into your potential customers with the help of our targeted research
                            </b></p>

                        </div>
                    </div>
                </div>
            
                
                <About />
                {/* about us page code here */}
                <div class="container-fluid" style={{backgroundColor:'#3A56A1'}}>
                    <div class="row px-3 py-4" >
                        <center class="wow fade-in-up">
                            <h2 class="mt-2" style={{ fontWeight:'bolder' , color:'#fff'}}>Our Services</h2>
                        </center>
                        <div class="col-sm-6 col-md-4 col-lg-4 mt-3">
                            <div style={{backgroundColor:'#f5ebeb' , padding:'10px 20px'}}>
                                <div>
                                    <h4><b>Qualitative</b></h4>
                                    <p>
                                        Also known as primary research, qualitative analysis demands interaction and real-time data. This is the process of collating data
                                        that hasn’t been out there yet. Interviews, market research surveys, questionnaires, and more fall under qualitative or primary research.
                                    </p>
                                    <br />
                                        <center>
                                            <a href="#">
                                                <button type="button" class="btn btn-md btn-success">View More</button>
                                            </a>
                                        </center>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 mt-3">
                            <div style={{backgroundColor:'#f5ebeb' , padding:'10px 20px'}}>
                                <div class="py-2">
                                    <h4><b>Qualitative</b></h4>
                                    <p>
                                        Also known as primary research, qualitative analysis demands interaction and real-time data. This is the process of collating data
                                        that hasn’t been out there yet. Interviews, market research surveys, questionnaires, and more fall under qualitative or primary research.
                                    </p>
                                    <br />
                                        <center>
                                            <a href="#">
                                                <button type="button" class="btn btn-md btn-success">View More</button>
                                            </a>
                                        </center>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4 mt-3">
                            <div style={{backgroundColor:'#f5ebeb' , padding:'10px 20px'}}>
                                <div class="py-2">
                                    <h4><b>Qualitative</b></h4>
                                    <p>
                                        Also known as primary research, qualitative analysis demands interaction and real-time data. This is the process of collating data
                                        that hasn’t been out there yet. Interviews, market research surveys, questionnaires, and more fall under qualitative or primary research.
                                    </p>
                                    <br />
                                        <center>
                                            <a href="#">
                                                <button type="button" class="btn btn-md btn-success">View More</button>
                                            </a>
                                        </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Indestry page code start here */}
                <div class="container">

                    <center class="wow fadeInUp">
                        <h2 class="text-primary mt-3 " style={{fontWeight:'bold'}}>Industry We Work With</h2>
                    </center>
                    <div class="row wow fadeInUp">
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/agri.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Agriculture</h4></center>
                        </div>
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/automotive.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Automotive</h4></center>
                        </div>
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/aviation.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Aviation</h4></center>
                        </div>
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/ecom.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Ecommerce</h4></center>
                        </div>
                        <br />
                    </div>
                    <div class="row wow fadeInUp mt-3">
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/education.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Education</h4></center>
                        </div>
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/electronic.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Electronic</h4></center>
                        </div>
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/film.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>Film</h4></center>
                        </div>
                        <div class="col-xs-6 col-md-6 col-sm-6 col-lg-3">
                            <img src="images/fmcg.jpg" id="Image" class="img-responsive" style={{width: '100%' }} />
                                <center><h4 style={{backgroundColor: '#f2f2f2',border: '1px solid #dcdcdc',padding: '10px 20px', marginTop: '-1%'}}>FMCG Market</h4></center>
                        </div>
                        <center>
                            <Link to="/indusrty">
                                <button class="btn btn-sm btn-success mt-2">View more</button>
                            </Link>
                        </center>
                    </div>
                </div>
                {/* <!-- coverage page code here -->*/}
                <hr />
                    <div class="container">
                        <center>
                            <h4 class="text-primary mt-3" style={{fontWeight: 'bolder'}}>Coverage</h4>
                        </center>
                        <div class="img-responsive ">
                            <img src="images/New_Map.png" alt="" width="100%" />
                        </div>
                    </div>
                    <Contact />



            </div>
        )
    }
}

export default Main;
