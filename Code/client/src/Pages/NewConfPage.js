import { useState } from "react";
import { Alert, Button, Container, Row, Card, ListGroup, ListGroupItem, Col, ProgressBar, Form } from "react-bootstrap";
import { ArrowLeftCircle, Controller, Cpu, GpuCard, Hdd, Joystick, Memory, Motherboard } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Create_build } from "./functions.js";
import API from '../API.js';

export const NewConfPage = (props) => {

    const now = 66;
    const [show, setShow] = useState(true);

    const selGame = { cpu: props.cpu, gpu: props.gpu, ram: props.ram, hdd: props.hdd, opt: props.opt };
    const [link, setLink] = useState('/new_configuration');

    const builds = Create_build(selGame, props.components);
    //console.log(builds[1]);
    const cheapPrice = builds[0].mb.price + builds[0].cpu.price + builds[0].gpu.price + builds[0].ram.price + builds[0].hdd.price;
    const topPrice = builds[1].mb.price + builds[1].cpu.price + builds[1].gpu.price + builds[1].ram.price + builds[1].hdd.price;

    return (
        <>
            <Container className="centered py-5">
                <br /><br />
                <Alert show={show} variant="light" className="bg-dark text-light text-center align-center" style={{ opacity: 0.9 }}>
                    <Alert.Heading>New Configuration info</Alert.Heading>
                    <p>
                        Since you want to play "<b>{props.selectedGame}</b>", we provided
                        you the following configurations: You can choose between the
                        best value for money or the best performance. It's all about you!
                    </p>

                </Alert>

                {!show && <Button variant="warning" onClick={() => setShow(true)}>More info</Button>}

                <hr />
                <Alert variant="dark" style={{ opacity: 0.9 }}>
                    <Container >
                        <Row >
                            <Col style={{ padding: "15px" }}>
                                <Card style={{ padding: "15px" }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Controller /> <b>Best value for money</b>
                                        </Card.Title>
                                        <hr />
                                        <p style={{ minHeight: '9rem' }}>
                                            <Card.Text>
                                                <em>This is a good move if you want to spend the less money possible
                                                    while maintaining respectable quality during your gaming session on {props.selectedGame}.</em>
                                            </Card.Text>
                                        </p>
                                    </Card.Body>
                                    <p>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Motherboard />{' '}Motherboard:{' '}{builds[0].mb.brand}{' '}{builds[0].mb.model}{' '}
                                                            {builds[0].mb.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Cpu />{' '}CPU:{' '}{builds[0].cpu.brand}{' '}{builds[0].cpu.model}{' '}
                                                            {builds[0].cpu.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <GpuCard />{' '}GPU:{' '}{builds[0].gpu.brand}{' '}{builds[0].gpu.model}{' '}
                                                            {builds[0].gpu.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Memory />{' '}RAM:{' '}{builds[0].ram.brand}{' '}{builds[0].ram.model}{' '}
                                                            {builds[0].ram.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Hdd />{' '}HDD/SSD:{' '}{builds[0].hdd.brand}{' '}{builds[0].hdd.model}{' '}
                                                            {builds[0].hdd.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </p>
                                    <p>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <h4>Total price: {cheapPrice} €</h4>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <Link to='/summary/' state={{ build: builds[0], link: link }}>
                                                <Form onSubmit={API.setSummary(JSON.stringify(builds))}>
                                                    <Button variant="warning"><b>Select</b></Button>
                                                </Form>
                                            </Link>
                                        </div>
                                    </p>

                                </Card>
                            </Col>
                            <Col style={{ padding: "15px" }}>

                                <Card style={{ padding: "15px" }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Joystick /> <b>Best performances</b>
                                        </Card.Title>
                                        <hr />
                                        <p style={{ minHeight: "9rem" }}>
                                            <Card.Text>
                                                <em>For those who want maximum performance when it comes to video games.
                                                    This configuration will allow you to play other games with higher requirements in the future.</em>
                                            </Card.Text>
                                        </p>
                                    </Card.Body>
                                    <p>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Motherboard />{' '}Motherboard:{' '}{builds[1].mb.brand}{' '}{builds[1].mb.model}{' '}
                                                            {builds[1].mb.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Cpu />{' '}CPU:{' '}{builds[1].cpu.brand}{' '}{builds[1].cpu.model}{' '}
                                                            {builds[1].cpu.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <GpuCard />{' '}GPU:{' '}{builds[1].gpu.brand}{' '}{builds[1].gpu.model}{' '}
                                                            {builds[1].gpu.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Memory />{' '}RAM:{' '}{builds[1].ram.brand}{' '}{builds[1].ram.model}{' '}
                                                            {builds[1].ram.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Hdd />{' '}HDD/SSD:{' '}{builds[1].hdd.brand}{' '}{builds[1].hdd.model}{' '}
                                                            {builds[1].hdd.price}{'€'}
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </p>

                                    <p>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <h4>Total price: {topPrice} €</h4>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <Link to="/summary/" state={{ build: builds[1], link: link }}>
                                                <Button variant="warning"><b>Select</b></Button>
                                            </Link>
                                        </div>
                                    </p>

                                </Card>

                            </Col>
                        </Row>
                    </Container>
                </Alert>

                <div className="d-flex justify-content-start">
                    <Link to="/setup">
                        <Button variant="warning">
                            <ArrowLeftCircle />{' '}<b>Back</b>
                        </Button>
                    </Link>
                </div>
                <br />
                <div>
                    <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                </div>

            </Container >
        </>

    );
}

export default NewConfPage;