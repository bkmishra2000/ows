import React, { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div>
                {/*<!-- Contact Us page code here  -->*/}

                <div style={{backgroundColor: '#3A56A1', padding: '38px 20px',}}>
                    <center>
                        <h1 style={{color: '#fff'}}>Contact US</h1>
                    </center>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                <form action="" class="form">
                                    <input type="text" class="form-control" placeholder="Enter Name" required />
                                    <br />
                                    <input type="text" class="form-control" placeholder="Enter Email" required />
                                    <br />
                                    <input type="text" class="form-control" placeholder="Enter Contact with Country Code. For eg +91" required />
                                    <br />
                                    <input type="text" class="form-control" placeholder="Enter Subject" required />
                                    <br />
                                    <textarea cols="20" rows="10" class="form-control" required></textarea>
                                    <br />
                                    <center><button type="submit" class="btn btn-md btn-success">Submit</button></center>
                                </form>
                            </div>
                            <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                <br /><br />
                                <center>
                                    <img src="images/A.png" alt="" class="img-responsive" style={{width: '100%'}} />
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;