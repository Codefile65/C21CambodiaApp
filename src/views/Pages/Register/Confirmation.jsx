import React, { Component } from 'react';
import {  List } from 'semantic-ui-react';
import { Button,CardHeader, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.png'
class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, age, city, country }} = this.props;

        return(
            <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <Card className="mx-4">
                  <CardHeader style={{borderBottomColor:'#beaf84'}}>
                  <strong><img src={logo}/></strong>
          </CardHeader>
                    <CardBody className="p-4">
                      <Form>
                      
                        <p className="text-muted">Click Confirm if the following details have been correctly entered</p>
                        <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>Email:
                            <a href='mailto:jack@semantic-ui.com'>  {email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>Age:  {age} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Address:  {city}, {country}</List.Content>
                    </List.Item>
                </List>
                <Row style={{marginTop:'20px'}}>
                <Col xs="12" sm="4">
                <Button color="success" block  onClick={this.back}>Back</Button>
                        </Col>
                        <Col xs="12" sm="6">
                        <Button color="success" block onClick={this.saveAndContinue}>Confirm</Button>
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

export default Confirmation;