import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import getHindiString from '../utils/adapter';

class EditorContainer extends Component {
  constructor(){
    super();
    this.state = {text1: '', text2: ''};
  }
  handleChange = (event) => {
    let that = this;
    let text = event.target.value;
    getHindiString(text).then((response) => {
      let hindi = response.data[1][0][1][0];
      that.setState({text2: hindi});
    });
    // getHindiString(text).then(function(data){debugger});
    this.setState({text1: text});
  }
  render() {
    return (
      <Container>
        <Row className='mt-5'>
          <Col>
            <Form.Control as='textarea' rows='25' value={this.state.text1} onChange={this.handleChange} placeholder='yahan likhein ya paste karein...'></Form.Control>
          </Col>
          <Col>
            <Form.Control as='textarea' rows='25' value={this.state.text2} readOnly></Form.Control>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditorContainer;
