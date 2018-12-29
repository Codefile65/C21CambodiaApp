import React, { Component } from 'react';
//import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';
import { Button, Card, CardBody,CardHeader, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.png'
class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
            <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <Card className="mx-4">
                  <CardHeader>
                  <strong><img src={logo}/></strong>
         
          </CardHeader>
                    <CardBody className="p-4">
                      <Form>
                       
                        <p className="text-muted">Create your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
                          
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='City'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder='Country'
                onChange={this.props.handleChange('country')}
                defaultValue={values.country}
                />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                        </InputGroup>
                        <Row>
                        <Col xs="12" sm="4">
                <Button color="success" block onClick={this.back}>Back</Button>
                        </Col>
                        <Col xs="12" sm="6">
                        <Button color="success" block onClick={this.saveAndContinue}>Save And Continue</Button>
                        </Col>
                    </Row>
                      
                      </Form>
                    </CardBody>
                    <CardFooter className="p-4">
                   
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

     
        )
    }
}

export default PersonalDetails;

