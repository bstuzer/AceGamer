import React from 'react';
import { Alert, Button, Container, ProgressBar, Row, Col, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap';
import { ArrowLeftCircle, QuestionCircle, InfoCircle, InfoCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const DetectPage = (props) => {

    const now = 33;
    return (
        <Container className='centered py-5' >
            <br /><br />
            <Row >
                <Col>
                    <div float="left" className='text-center text-warning' >
                        <Alert variant="dark" className="bg-dark text-light text-center align-center" style={{ opacity: 0.98 }}  >
                            <Alert.Heading style={{ fontSize: "30px" }}>
                                Let's find out what you need to play <b>{props.selectedGame}</b>!
                            </Alert.Heading>

                            <hr />
                            <Container fluid>
                                <Row >
                                    <Col className='borderRight' style={{ padding: "20px", fontSize: "18px" }}>
                                        <h4>Do you want to upgrade an <b>existing build</b>?</h4>
                                        <div>
                                            <br />
                                            Use <b>auto-detect</b> for your current PC, or <b>manually select</b> the components of another PC.
                                            <br />
                                        </div>

                                    </Col>

                                    <Col style={{ fontSize: "18px", padding: "20px" }}>
                                        <h4>Do you want to build a <b>new PC</b>?</h4>
                                        <br />
                                        Press the button below and find out which components fit your requirements better.

                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="borderRight">
                                        <Row>
                                            <Col>
                                            <b>↓</b>
                                        </Col>
                                            <Col>
                                            <b>↓</b>
                                            </Col>
                                        </Row>
                                        <Row className='d-flex justify-content-between'>
                                            <Col >
                                                <Link to="/suggestion">
                                                    <Button size="md" variant="outline-warning">
                                                        Auto-detect<br></br>
                                                    </Button>
                                                </Link>

                                                {/*<button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="In case auto detection fails, you will be redirected to the manual detection page.">
                                                    <InfoCircleFill className="text-warning"/>
    </button                                    >*/}
                                                
                                            </Col>
                                            <Col >

                                                <Link to="/manual_selection">
                                                    <Button size="md" variant="outline-warning">
                                                        Manual
                                                    </Button>
                                                </Link>
                                                
                                            </Col>
                                        </Row>
                                        <Row><br/></Row>
                                        <Row>
                                            <small><em>(In case auto detection fails, you will also be redirected to the manual selection page)</em></small>
                                        </Row>
                                        
                                    </Col>
                                    <Col className="d-flex justify-content-center">

                                        <Col>
                                        <Row>
                                            <Col>
                                            <b>↓</b>
                                        </Col>
                                        </Row>
                                            <Link to="/new_configuration" >
                                                <Button size="md" variant="outline-success" justify-content="flex-start">
                                                    <b>New PC</b>
                                                </Button>
                                            </Link>
                                        </Col>
                                        
                                    </Col>
                                </Row>
                                
                                <br/>
                            </Container>

                        </Alert>
                    </div>
                </Col>

            </Row>

            <div>
                <Link to='/'>
                    <Button variant="warning">
                        <ArrowLeftCircle /> {' '}<b>Back</b>
                    </Button>
                </Link>
            </div>
            <br />
            <div>
                <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
            </div>

        </Container >
    );
};

export default DetectPage;