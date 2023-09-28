
import { useEffect, useState } from "react"
import { Layout } from "../Component/Layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import { AiFillInstagram } from "react-icons/ai"


export function Home() {
    const image1 = "https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A3366-scaled.jpg?resize=1536%2C1025&ssl=1"
    const image2 = "https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/03/HT6A5292a-scaled.jpg?resize=1536%2C1025&ssl=1"
    const image3 = "https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2019/10/project-crystal-cove.jpg?w=1222&ssl=1"
    const image4 = "https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2019/10/5W4A3567-3-1.jpg?resize=977%2C1024&ssl=1"
    const image5 = "https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2019/10/project-pelican-hill.jpg?w=1222&ssl=1"
    const image6 = 'https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/05/HT6A1722.jpg?fit=300%2C200&ssl=1'
    const [selectedimage, setSelecetedimage] = useState(0)
    const [allimage, setAllimage] = useState([image1, image2, image3, image4, image5, image6])
    useEffect(() => {
        setInterval(() => {
            setSelecetedimage(selectedimage => selectedimage < 4 ? selectedimage + 1 : 0)
        }, 4000);
    }, [])
    return (
        <Layout>

            <div className="heading">SOUTHERN CALIFORNIA'S LARGEST LUXURY FURNITURE &amp; INTERIOR DESIGN SHOWROOM</div>
            <img width="100%" src={allimage[selectedimage]} className="mt-2"></img>
            <div className="text1">
                <h2>Recent Interior Design Work</h2>
            </div>
            <Container>

                <Row>
                    <Col lg={2}>
                        <div className="container">
                            <img src={image1} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>

                        </div>

                    </Col>
                    <Col lg={2}>
                        <div className="container">
                            <img src={image2} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>

                        </div>

                    </Col>
                    <Col lg={2}>
                        <div className="container">
                            <img src={image3} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>

                        </div>

                    </Col>
                    <Col lg={2}>
                        <div className="container">
                            <img src={image4} alt="Avatar" className="image" width={"328px"} />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>

                        </div>

                    </Col>
                    <Col lg={2}>
                        <div className="container">
                            <img src={image5} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>

                        </div>

                    </Col>
                    <Col lg={2}>
                        <div className="container">
                            <img src={image6} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">Hello World</div>
                            </div>

                        </div>

                    </Col>

                </Row>
            </Container>
            <div className="text1">
                <h2>LUXURY FURNITURE FOR UNIQUE INTERIORS</h2>
            </div>

            <div >
                <img style={{ width: "100%" }} src='https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2023/02/Screenshot-2023-02-28-at-5.44.31-PM.png?fit=2876%2C1924&ssl=1'  alt="not found"></img>
            </div>

            <Row>
                <Container className=" mt-2 d-flex justify-content-center">

                    <Button variant="dark" className="btn1" size="lg">SHOP ON-LINE NOW</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outline-dark" size="lg">VISIT SHOWROOM</Button>
                </Container>
            </Row>


            <div className="container">
                <img src="https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg" alt="Snow" style={{ width: '100%' }} />
                <div className="centered">DESIGN SERVICES</div>
                <div className="centered1"><h1>Open New Horizons<br></br>
                    of Creativity<br></br>
                    & Expression</h1></div>

                <div className="centered2">
                    <h4>LEARN HOW</h4>
                </div>
            </div>
            <div className="mt-3">
                <video src="https://www.marcpridmore.com/wp-content/uploads/2020/03/video-crystal-cove.mp4" poster="https://www.marcpridmore.com/wp-content/uploads/2020/10/home-page.jpg" loop="" playsinline="" reload="" webkit-playsinline="" alt="not " width={'100%'}></video>

            </div>
            <div>

                <Row>
                    <Col lg={6}>
                        <Container>
                            <img src="https://i0.wp.com/www.marcpridmore.com/wp-content/uploads/2020/10/marc-scaled.jpg?resize=1496%2C2048&ssl=1" alt="img" width="70%"  />
                        </Container>

                    </Col>
                    <Col lg={6} className="mt-5 ">
                        <h1 className="set-design">INTERIOR DESIGN & LUXURY FURNITURE SHOWROOM</h1>

                        <h5 className="texth5">
                            Marc Pridmore is the designer and consultant for Southern
                            California’s most discerning clientele. additionally serving international clients with unique Interior Design and Luxury Furniture pieces around the globe. </h5>

                        <h5 className="texth6">Marc Pridmore Designs was established in 2012 in Costa Mesa, California, serving homes both
                            locally and internationally with custom interior design and high-end furniture. With a
                            showroom spanning 50,000 sq ft, we offer some of the most exclusive luxury furniture on the
                            market. Possibly the only one of its kind in North America for its breadth of luxury furnishings,
                            our showroom curates an experience that is able to do these peerless pieces justice.					</h5>
                        <Button variant="outline-dark" size="lg" className="mt-2">BOOK A DESIGN CONSULTATION</Button>
                    </Col>
                </Row>
            </div>

            <div >
                <Container className="lastimage mt-5">


                    <Row>
                        <Col lg={3}  className="mt-3">
                            <img src="https://www.marcpridmore.com/wp-content/uploads/sb-instagram-feed-images/359459595_1029165391426429_8105111826610813762_nfull.jpg" height={'200px'} alt="not " width={'250px'}></img>
                        </Col>
                        <Col lg={3} className="mt-3">
                            <img src="https://www.marcpridmore.com/wp-content/uploads/sb-instagram-feed-images/358203266_659033249446837_3755885161494787170_nfull.jpg" alt="not available" height={'200px'} width={'250px'}></img>
                        </Col>
                        <Col lg={3} className="mt-3">
                            <img src="https://www.marcpridmore.com/wp-content/uploads/sb-instagram-feed-images/357601548_272923485341556_5485838074094421487_nfull.jpg" alt="not available" height={'200px'} width={'250px'}></img>
                        </Col>
                        <Col lg={3} className="mt-3">
                            <img src="https://www.marcpridmore.com/wp-content/uploads/sb-instagram-feed-images/357648337_165889553157490_7576166001115680615_nfull.jpg" alt="not available" height={'200px'} width={'250px'}></img>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div >
                <Container className="justify-content-center mt-5">

                    <a href="https://www.instagram.com"><Button variant="primary" size="sm"  ><h6><AiFillInstagram />&nbsp;&nbsp;Follow on Instagram</h6></Button></a>
                        

                   
                </Container>
            </div>




        </Layout>
    )

}