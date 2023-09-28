import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

export function Footer() {
    return (


        <div className="footer mt-3">
            <Container>

                <Row>
                    <Col lg={3}>
                        <ul>
                            <p>CUSTOMER SERVICES</p>
                            <Link to='/contactus'><span >Contact us</span></Link><br></br>
                            <Link to='/shiping'><span>Shipping Information</span></Link><br></br>
                            <Link to='/returnpolicy'><span>Return Policy</span></Link><br></br>
                            <Link to='/termandcon'><span>Terms and Conditions</span></Link><br></br>
                            <Link to='/privacypolicy'><span> Privacy Policy</span></Link><br></br>


                        </ul>
                    </Col>
                    <Col lg={2}>
                        <ul>
                            <p>About Us</p>
                            <Link to='/meetmarc'><span>Meet Marc</span></Link><br></br>
                            <Link to='/showroom'><span>Showroom</span></Link><br></br>
                            <Link to='/designser'><span>Design Services</span></Link><br></br>

                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul className="footertext">
                            <p>VISIT OUR SHOWROOM</p>
                            <p>Marc Pridmore Designs
                                3089 Bristol St.
                                Costa Mesa, CA 92626</p>

                            <p>  Mon-Sat: 10am-6pm<br></br>
                                Sun: 12pm-5pm</p>

                            <p> CALL US: (888) 352-8977</p>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <ul>
                            <p>Don't miss out on sales, new arrivals and more</p>
                            <input className="inputtext" type="text" placeholder="Enter Your Email"></input>
                            <Link to='/register'><spam>Sign Up</spam></Link><br></br>
                            <div className="mt-4">_________________________________________________</div>

                            <div className="logo">
                                <Link to='/www.facebook.com'> <AiFillFacebook/></Link>
                                <Link to='/www.instagram.com'> <AiFillInstagram/></Link>
                                <Link to='/www.twitter.com'><AiFillTwitterCircle/></Link>
                                <Link to='/www.youtube.com'><AiFillYoutube/></Link>
                           
                            </div>
                        </ul>
                    </Col>

                </Row>
            </Container>

        </div>


    )

}



