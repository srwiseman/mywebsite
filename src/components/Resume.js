import React, { Component } from 'react';
import FadeIn from 'react-fade-in'
import { Collapse, Container, Row, Col, Card, CardTitle, CardText, CardHeader } from 'reactstrap'

class Resume extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount(){
    this.props.toggleIcon('fas fa-list-alt topicon');
    document.body.style.backgroundColor = '#E0E0E0';

  }


  render() {


    return (
    <div className="about">
      <FadeIn>
      <div className="content">
          <h1 className="App-title">Career</h1>
          <Container>
          <FadeIn>
          <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>          
          <Card style={{backgroundColor: "#EEE"}}>
          <CardHeader>
          <h2><i class="fas fa-briefcase"></i> Work</h2>
          </CardHeader>
          <CardTitle>
          <br/>
          Rockport Networks - Software Developer
          </CardTitle>
          <CardText>
          <p><strong>Develop</strong><br/>Develop production single-page web applications that interact with back-end microservices through REST APIs and websockets</p>
          <p><strong>Maintain</strong><br/>Utilize functional programming principles and frameworks to ensure code is simple, maintainable, and highly testable</p>
          <p><strong>Test</strong><br/>Build robust mock services to ensure that testing and development of the front-end architecture can be done independently of any back-end development.
          Test functionality using Puppeteer automated tests.</p>
         </CardText>
         <i class="fas fa-ellipsis-h"></i>
          <CardTitle>
          <br/>
          Nokia - Applications Engineer (Team Lead) - 2013 to 2018
          </CardTitle>

          <CardText>
          <p><strong>Debug Production Java code</strong>
          <br/>Dubug and poinpoint code bugs in a large scale Java application. Use tools/techniques such as Java thread dumps, HPROF analysis, Oracle AWR reports, garbage collection analysis,
          Linux performance analysis, Jira issue tracking, and more.</p>
          <p><strong>Develop tools and web applications</strong>
          <br/>Full-stack web application development. Using React, Javascript, HTML, CSS, and JQuery, develop robust front-ends. Using Python, Flask, Java, SQLite, develop solid back-end functionality.
          Develop REST APIs to communicate between components.</p>
          <strong>Deploy Software around the world</strong>
          <br/>Traveled around the world performing professional service work. Deployed HP servers, installed operating systems such as Red Hat Linux, defined the server networking rules, and installed 
          Nokia software.
          </CardText>
          </Card>
         
          </Col>
          </Row>
          <br/>
          <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card style={{backgroundColor: "#DDD"}}>
          <CardHeader>
          <h2><i class="fas fa-graduation-cap"></i> School</h2>
          </CardHeader>
          <CardTitle>
          <br/>
          <strong>Memorial University of Newfoundland - 2007 to 2013</strong>
          </CardTitle>
          <CardText>
              Bachelor of Computer Engineering
          <br/>Co-op program (six workterms)
          </CardText>
          </Card>
          <br/>
          </Col>
          </Row>
          </FadeIn>

          </Container>
          
      </div>
      </FadeIn>
      </div>
    );
  }
}

export default Resume;