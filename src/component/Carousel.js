import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
class Carousels extends Component {

    render() {
        return (
            <section className="carou">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/abstract_3d_facebook_cover_1370594397.jpg'}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col sm={7}>
                                        <Row className="justify-content-md-center">
                                        <Col sm={3}>
                                            <img class="john" src={process.env.PUBLIC_URL + '/images/john.jpg'} alt="John_Doe"></img>
                                        </Col>
                                        </Row>
                                        <p class="aboutJohn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo
                                                    perferendis eum, enim
                                                    ratione
                                                    cum minima, mollitia iste quia saepe distinctio. Libero assumenda, exercitationem
                                                    voluptatibus
                                atque quae totam perferendis eum.</p>
                                        <Container>
                                            <Row className="justify-content-md-center">
                                                <Col sm={4} className="topBorderCarouselCustom">
                                                </Col>
                                            </Row>
                                        </Container>
                                        <h6 class="aboutJohn">John Doe</h6>
                                        <p class="aboutJohn">New York</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/1322933272.jpg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Container>
                                <Row className="justify-content-md-center">
                                    <Col sm={7}>
                                        <Row className="justify-content-md-center">
                                        <Col sm={3}>
                                            <img class="john" src={process.env.PUBLIC_URL + '/images/john.jpg'} alt="John_Doe"></img>
                                        </Col>
                                        </Row>
                                        <p class="aboutJohn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo
                                                    perferendis eum, enim
                                                    ratione
                                                    cum minima, mollitia iste quia saepe distinctio. Libero assumenda, exercitationem
                                                    voluptatibus
                                atque quae totam perferendis eum.</p>
                                        <Container>
                                            <Row className="justify-content-md-center">
                                                <Col sm={4} className="topBorderCarouselCustom">
                                                </Col>
                                            </Row>
                                        </Container>
                                        <h6 class="aboutJohn">John Doe</h6>
                                        <p class="aboutJohn">New York</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/images/3d_balls_1326360640.jpg'}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Container>
                                <Row className="justify-content-md-center">
                                    <Col sm={7}>
                                        <Row className="justify-content-md-center">
                                        <Col sm={3}>
                                            <img class="john" src={process.env.PUBLIC_URL + '/images/john.jpg'} alt="John_Doe"></img>
                                        </Col>
                                        </Row>
                                        <p class="aboutJohn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo
                                                    perferendis eum, enim
                                                    ratione
                                                    cum minima, mollitia iste quia saepe distinctio. Libero assumenda, exercitationem
                                                    voluptatibus
                                atque quae totam perferendis eum.</p>
                                        <Container>
                                            <Row className="justify-content-md-center">
                                                <Col sm={4} className="topBorderCarouselCustom">
                                                </Col>
                                            </Row>
                                        </Container>
                                        <h6 class="aboutJohn">John Doe</h6>
                                        <p class="aboutJohn">New York</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        );
    }
}

export default Carousels;
