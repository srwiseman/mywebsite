import React, { Component } from 'react';
import FadeIn from 'react-fade-in'
import { Collapse, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap'

class Skills extends Component {
  constructor(props){
  	super(props);
    this.state = {
      react: false,
      python: false
    }
  }

  componentDidMount(){
    this.props.toggleIcon('fas fa-star topicon');

  }

  reactToggle(){
    this.setState({react: !this.state.react})
  }


  render() {


    return (
    <div className="skills">
      <div className="content">
      <FadeIn>
          <h1 className="App-title">Skills</h1>
          <h2>What I'm focusing on right now</h2>
          <p><strong>All things React.</strong> I like to make things. React helps me make things. <strong>I like React.</strong></p>
          <h2>What I do</h2>
          <Container>
          <Row>
          <Col sm="12" md="6">
          <br/>
          <Card style={{backgroundColor: "#EEE"}}>
            <CardTitle>Front-end</CardTitle>
            <CardText>
            React (Flux, Redux, material-ui, Reactstrap), Javascript, HTML, CSS, Clojurescript, Jest, Puppeteer
            </CardText>
          </Card>
          </Col>
          <Col sm="12" md="6">
          <br/>
          <Card style={{backgroundColor: "#EEE"}}>
          <CardTitle>Back-end</CardTitle>
          <CardText>
          Python (Flask, Django), Java, C#, NodeJS, Oracle, SQlite, Clojure
          </CardText>
          </Card>
          </Col>
          </Row>
          <br/>
          <Row>
          <Col sm="12" md="6">
          <br/>
          <Card style={{backgroundColor: "#EEE"}}>
            <CardTitle>Operating Systems</CardTitle>
            <CardText>
            Unix (Solaris), Linux (Red-Hat, Centos, Fedora, Ubuntu), Windows
            </CardText>
          </Card>
          </Col>
          <Col sm="12" md="6">
          <br/>
          <Card style={{backgroundColor: "#EEE"}}>
            <CardTitle>Dev Tools</CardTitle>
            <CardText>
            IntelliJ, Eclipse, Sublime, Git, PyCharm, Jira
            </CardText>
          </Card>
          </Col>
          </Row>
          </Container>
          <br/>
          <p>Interested in <strong><a href="javascript:void(0)" onClick={this.reactToggle.bind(this)}>examples</a></strong>?</p>
          
          <Collapse isOpen={this.state.react}>
          <h2>React (Javascript)</h2>
          <p>At Rockport Networks, I develop a single page application using the React library. We use Clojurescript which transpiles to Javascript. The main libraries I use are Reagent
          (a Clojurescript React wrapper library) and re-frame (similar in concept to Redux).</p>
          <p>My first react project was a project I called <a href='https://github.com/srwiseman/sounddeez'><strong> Sounddeez </strong></a>. Basically, It creates a virtual DJ at my house. 
          Essentially, anyone who connects to my WiFi can play any song in the <strong><a href="https://www.deezer.com/en/">Deezer</a></strong> library on a stereo at my house! I wrote a backend API in GO, and the entire frontend in React.</p>
          <p>I also created <a href='https://github.com/srwiseman/mywebsite'><strong> this website</strong></a> with React. It's pretty basic, but it was a fun little project. Each page is a component, the top bar is a component, and the sidebar on the left is a component. It uses a hash router to keep track of what's displayed. I package it as a single .js bundle using <strong><a href="https://webpack.js.org/">webpack</a></strong>.</p>
          <p>Lastly, I'm developing a virtual machine manager at work. It enables our users to create/delete/manage VMs. The cool part is that you can create a VM pre-loaded with any version of our software, with any database restored on it!
          It also does it blazingly fast! 
          The frontend (which looks quite snazzy), is entirely coded with React. I decided to do things right, and employ the <strong><a href="https://facebook.github.io/flux/docs/overview.html">React flux model</a></strong>.
          Basically, the components trigger actions, which trigger API calls to the Java <strong><a href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST API</a></strong> we developped. The Java backend communicates to an <strong><a href="https://www.openstack.org/">openstack</a></strong> API, and provides data to the React frontend. The actions are dispatched and picked up by the stores, which update the themselves based on the results of the actions.
          Then the components (who are listening for changes to the stores), update their states accordingly! Fun! Obviously, I can't share the source for this one. </p>
          
          <h2>Python</h2>
          <p><strong><a href="https://www.python.org/">Python</a></strong> is generally my "all-purpose" go-to language. Especially if I'm trying to get something written quickly. Most of the things I create with Python are at my job. Most recently, I developed a set of web applications for internal use. These applications automate many tasks, and are all written in python on top of the <strong><a href="http://flask.pocoo.org/">Flask</a></strong> framework.
          They integrate with <strong><a href="https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol">LDAP</a></strong> to ensure that users have appropriate access authorization. </p>

          <p>I also participate in programming competitions like <strong><a href="https://code.google.com/codejam/">Google Code Jam</a></strong>. I almost always use python to code my solutions since you can lay down basic code very, very quickly 
          (and these competitions are time-limited).</p>

          <h2>Java</h2>
          <p>The application that I work with at my job is a distributed Java application. Along with being able to write and debug Java code, I need to be able to troubleshoot the live application. 
          I regularly need to read Java thread dumps to identify issues such as deadlocks. I also routinely need to analyze the applications heap and look at class histograms to pinpoint JVM memory
          issues.</p> 

          <h2>SQL (Databases)</h2>
          <p>The application I work with at my job has a distributed <strong><a href="http://www.oracle.com/technetwork/database/enterprise-edition/overview/index.html">Oracle database</a></strong>. As someone who needs to regularly work with this database, I need to be familiar with SQL. I also have quite a bit of
          experience troubleshooting Oracle databases. I regularly analyze AWR and ASH reports to root cause database performance issues.</p> 
          <p>I've also developed back end applications that make use of other relational database technologies like <strong><a href="https://www.sqlite.org/index.html">sqlite</a></strong> and graph databases like <strong><a href="https://neo4j.com/">neo4j</a></strong>.</p>
          
          <h2>Linux/UNIX</h2>
          <p>I work in Linux about 90% of the time at my job. The application that I work with is only supported on specific versions of <strong><a href="https://www.redhat.com/en">Red Hat</a></strong>.
          Many performance issues that we face, require that I know how to troubleshoot in a Linux environment. For example, I need to regularly diagnose performance issues with commands like: top, vmstat, iostat, netstat, etc.
          I'm quite familiar with the directory structures, and navigating, viewing, and editing files. Also quite familiar with manipulating output with things like grep, awk, sed, etc. I used to do professional services,
          where I would travel all around the world and install Red Hat. My Linux is solid.</p>

          <h2>Unity</h2>
          <p>Once upon a time, I used to develop games. I got quite proficient at using the Unity engine. I created a mobile game called Triplix and released it on the App store and the <a href="https://play.google.com/store/apps/details?id=com.swisemanapps.tripli&hl=en"><i class="fab fa-google-play"></i><strong> Google Play</strong></a> store. It got featured
          on a popular website, and I thought I was on my way to retirement. I figured I would place some ads and get rich off the ad revenue. A few years and 75$ in ad revenue later, I learned
          that it's hard to make money from indie game development. I did, however, learn C#. Turns out it's pretty similar to Java. I also learned how to integrate some cool Unity tools like Unity Analytics and Unity Ads.</p>
          </Collapse>
      </FadeIn>
      </div>
      </div>
    );
  }
}

export default Skills;