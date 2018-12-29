import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Success extends Component{
    render(){
        return(

            <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="6">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                      <Form>
                        <h1>Details Successfully Saved</h1>
                        <p className="text-muted">Click Confirm if the following details have been correctly entered</p>
                       
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

export default Success;