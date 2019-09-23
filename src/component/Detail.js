import React, { Component } from 'react';
// import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
class Detail extends Component {
  
    render() {
      return (
        <section className="page3">
            <Container>
              <Row className="justify-content-md-center">
                <Col sm={4} style={{ textAlign: "center", color: "white" }} className="my-5">
                
                    <img src={process.env.PUBLIC_URL + '/images/image3.png'} alt="Mobile"></img>
                    </Col>
                  
                  <Col sm={6} style={{ textAlign: "Left", color: "white"}} className="my-5">
                  <h1>Explain why it's best</h1>
                  <Container>
                  <Row className="my-4">
                  <Col sm={4} className="topBorderCustom">
                      
                      </Col>
                      </Row>
                  </Container>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum blanditiis maiores dolores
                        quod voluptatem, esse commodi, similique molestias necessitatibus perspiciatis ab quasi quisquam
                        magnam voluptate quibusdam. Enim eum culpa sunt.</p>
                    <ul>
                        <li class="a1">Reliable and Secure Platform</li>
                        <li class="a2">Everything is perfectly orgainized for future</li>
                        <li class="a3">Attach Large file easily</li>
                        <li class="a4">Tons of features and easy to use and customize</li>
                    </ul>
                  </Col>
                  </Row>


          </Container>  
        </section>
            );
          }
        }
        
        export default Detail;
  