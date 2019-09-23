import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
class Features extends Component {
  
    render() {
      return (
        <section className="my-5">
            <Container>
              <Row className="justify-content-md-center">
                <Col sm={12} style={{ textAlign: "center", color: "white" }}>
                <h1>Amazing Features</h1>
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col sm={2} className="mt-3 bottomBorderCustom">
                  </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col sm={12} style={{ textAlign: "center", color: "white" }} className="mt-1">
                    <h5>List Your app features and all the details Lorem ipsum dolor kadr</h5>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                  <Col sm={2} className="bottomBorderCustom">
                  </Col>
                  </Row>
<Row className="justify-content-md-center mt-5">
<Col sm={3} className="mx-auto">
<div dir="rtl">
<ul class="text-right">
                        <li class="a">
                            <h5 class="text-primary">Responsive Design</h5>
                            <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
                                commodi, quidem expedita officiis </p>


                        </li>

                        <li class="b">
                            <h5 class="text-primary">Bootstrap 3.1</h5>
                            <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
                                commodi, quidem expedita officiis </p>


                        </li>
                        <li class="c">
                            <h5 class="text-primary">Cross-Browser Support</h5>
                            <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
                                commodi, quidem expedita officiis </p>

                        </li>
                    </ul>
</div>
                  </Col>
<Col sm={3} className="mx-auto">
  <img src={process.env.PUBLIC_URL + '/images/mobile.png'} alt="Mobile"></img>
</Col>
<Col sm={3} className="mx-auto">
<ul>
                    <li class="d">
                        <h5 class="text-primary">360+ Icon Fonts</h5>
                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
                            commodi, quidem expedita officiis</p>


                    </li>

                    <li class="e">
                        <h5 class="text-primary">Creative Design</h5>
                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
                            commodi, quidem expedita officiis</p>


                    </li>
                    <li class="f">
                        <h5 class="text-primary">More Features</h5>
                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis
                            commodi, quidem expedita officiis</p>

                    </li>
                </ul>
  
</Col>
</Row>


           

          </Container>  
        </section>
            );
          }
        }
        
        export default Features;
  