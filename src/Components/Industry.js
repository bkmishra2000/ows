import React, { Component } from "react";

class Industry extends Component {
    render() {
        return (
            <div>
                {/* Indestry page code start here */}
                <div class="container">

                    <center>
                        <h2 class="text-primary m-3 " style={{fontWeight:'bold'}}>Industry We Work With</h2>
                    </center>
                    <div class="row fade-in-up">
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
                    <div class="row mt-3">
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
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default Industry;