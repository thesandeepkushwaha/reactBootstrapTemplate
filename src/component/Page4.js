import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
class Page4 extends Component {

    render() {
        return (
            <div>
                <section className="page4 my-5">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col sm={6} style={{ textAlign: "Left", color: "white" }}>

                                <h1>Great Way to describe your app</h1>
                                <Container>
                                    <Row className="my-4">
                                        <Col sm={4} className="topBorderCustom">
                                        </Col>
                                    </Row>
                                </Container>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum blanditiis maiores dolores quod
                                    voluptatem, esse commodi, similique molestias necessitatibus perspiciatis ab quasi quisquam magnam
                    voluptate quibusdam. Enim eum culpa sunt.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi, aspernatur unde suscipit
                    consectetur autem aliquam aut ex dolorum, </p>
                            </Col>
                            <Col sm={4}>
                                <img src={process.env.PUBLIC_URL + '/images/image_4.png'} alt="Mobile"></img>
                            </Col>

                        </Row>
                        <br /><br /><br />

                    </Container>
                </section>
                <section>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col sm={4}>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="myVideo"></iframe>
                            </Col>
                            <Col sm={6} style={{ textAlign: "Left", color: "white"}}>
                                <h2>Discription with video</h2>
                                <Container>
                                    <Row className="my-4">
                                        <Col sm={4} className="topBorderCustom">
                                        </Col>
                                        <p className="my-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad nisi, voluptates quibusdam soluta
                                            optio corrupti dolores reprehenderit veritatis illo deleniti repellendus obcaecati ex adipisci
                                            aperiam molestias quam rerum! Saepe!
                 </p>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius temporibus voluptates officia ducimus
                                            nisi? Assumen
                 </p>

                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <br /><br /><br />
                    </Container>
                </section>
            </div>
        );
    }
}

export default Page4;
