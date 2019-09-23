import React, { Component } from 'react';
import { Container, Row, Col,Button,} from 'react-bootstrap';
class Download extends Component {

    render() {
      return (
        <div>
          <Container>
              <Row className="topCustom justify-content-md-center">
                <Col sm={7} style={{ textAlign: "center", color: "white" }}>
                  <h1 className="mt-5">Present your app in beautiful way with kane.</h1>
                </Col>
                </Row>
                <Row className="mt-5">
                  <Col sm={12} style={{ textAlign: "center", color: "white" }} className="">
                    <h5>Available on App Store and Play Store</h5>
                  </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col sm={12} style={{ textAlign: "center", color: "white" }}>
  
                      <Button variant="primary" size="lg"><span class="fa fa-arrow-circle-o-down"></span> Download App</Button>
  
                    </Col>
                  </Row>
          </Container>  
        </div>
            );
          }
        }
        
        export default Download;
  