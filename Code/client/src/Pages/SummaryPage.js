import { Alert, Button, Container, Row, Card, ListGroup, ListGroupItem, Col, ProgressBar } from "react-bootstrap"
import { ArrowCounterclockwise, ArrowLeftCircle, Cpu, GpuCard, Hdd, Joystick, Memory, Motherboard } from "react-bootstrap-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
export const SummaryPage = (props) => {

    const now = 100;
    const location = useLocation();
    const newPc = location.state;
    const link = location.state.link;
    const selComponents = location.state.selBuild ? location.state.selBuild : null;
    const comp = location.state.comp ? location.state.comp : null;

    const navigate = useNavigate();

    let currentBuild;
    if (selComponents != null) {

        const combined = { ...selComponents, ...location.state.build };
        currentBuild = Object.entries(combined).reduce((acc, [key, value]) => {
            if (
                !Object.keys(selComponents).includes(key) || !Object.keys(location.state.build).includes(key)
            ) {

                acc[key] = value;
            }
            return acc;
        }, {});

    }

    return (
        <Container className="centered py-5" style={{ opacity: 0.9 }}>
            <br /><br />
            <div float="left" fluid="true" className='text-center text-warning'>
                <Alert variant="dark" className="bg-dark text-light text-center align-center">
                    <Alert.Heading><h2>Great choice! You've made it to the last step!</h2></Alert.Heading>
                </Alert>
            </div>
            <Container>
                <Col >
                    <Row>
                        <Card>
                            <Card.Body className="text-center">
                                <Card.Title>
                                    <Joystick /> Here is the build we've assembled that will help you play <b>{props.selectedGame}</b> smoothly!
                                </Card.Title>
                                <hr />
                                <p>
                                    <Card.Text>
                                        <em>By clicking on "Buy" buttons, you can shop for the component on the website you will be redirected to.
                                            <br />Prices may vary. The calculated total price below is an approximate value.</em>
                                    </Card.Text>
                                </p>
                            </Card.Body>
                            {
                                link.localeCompare("/new_configuration") === 0 ?
                                    <>
                                        <div style={{ minHeight: "16rem" }}>
                                            <ListGroup className="list-group-flush" >
                                                <ListGroupItem>
                                                    <Row>
                                                        <div className="d-flex">
                                                            <Col><Motherboard />{' '}Motherboard</Col>
                                                            <Col>{newPc.build.mb.brand}{' '}{newPc.build.mb.model}</Col>
                                                            <Col md={2}>{newPc.build.mb.price}{'€'}</Col>
                                                            <div className="flex-row-reverse">
                                                                <Col md={1}><Button className="buyButton" size="sm" href={newPc.build.mb.link} target="_blank">Buy</Button></Col>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    <div className="d-flex">
                                                        <Col><Cpu />{' '}CPU</Col>
                                                        <Col>{newPc.build.cpu.brand}{' '}{newPc.build.cpu.model}</Col>
                                                        <Col md={2}>{newPc.build.cpu.price}{'€'}</Col>
                                                        <div className="flex-row-reverse">
                                                            <Col md={1}><Button className="buyButton" size="sm" href={newPc.build.cpu.link} target="_blank">Buy</Button></Col>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    <div className="d-flex">
                                                        <Col><GpuCard />{' '}GPU</Col>
                                                        <Col>{newPc.build.gpu.brand}{' '}{newPc.build.gpu.model}</Col>
                                                        <Col md={2}>{newPc.build.gpu.price}{'€'}</Col>
                                                        <div className="flex-row-reverse">
                                                            <Col md={1}><Button className="buyButton" size="sm" href={newPc.build.gpu.link} target="_blank">Buy</Button></Col>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    <div className="d-flex">
                                                        <Col><Memory />{' '}RAM</Col>
                                                        <Col>{newPc.build.ram.brand}{' '}{newPc.build.ram.model}</Col>
                                                        <Col md={2}>{newPc.build.ram.price}{'€'}</Col>
                                                        <div className="flex-row-reverse">
                                                            <Col md={1}><Button className="buyButton" size="sm" href={newPc.build.ram.link} target="_blank">Buy</Button></Col>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    <div className="d-flex">
                                                        <Col><Hdd />{' '}HDD/SSD</Col>
                                                        <Col>{newPc.build.hdd.brand}{' '}{newPc.build.hdd.model}</Col>
                                                        <Col md={2}>{newPc.build.hdd.price}{'€'}</Col>
                                                        <div className="flex-row-reverse">
                                                            <Col md={1}><Button className="buyButton" size="sm" href={newPc.build.hdd.link} target="_blank">Buy</Button></Col>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </div>

                                        <div className="d-flex justify-content-center" style={{ minHeight: "5rem", paddingTop: "15px", fontWeight: "bold" }}>
                                            <h2 style={{ backgroundColor: " #ffbf0073", border: "2px solid #ffbf0073", padding: "10px", borderRadius: "50px 20px" }}>Total price: ~{newPc.build.hdd.price + newPc.build.mb.price + newPc.build.cpu.price + newPc.build.gpu.price + newPc.build.ram.price} €</h2>
                                            <br />
                                        </div>
                                    </>
                                    :

                                    <Row style={{ margin: 0, padding: 0 }}>

                                        <Row style={{ fontSize: "22px" }}>
                                            <Col className="d-flex justify-content-center" >
                                                <b>Current components</b>
                                            </Col>
                                            <Col className="d-flex justify-content-center">
                                                <b>Picked components</b>
                                            </Col>
                                        </Row>
                                        {
                                            link.localeCompare("/manual_suggestions") === 0 ?
                                                <Row >
                                                    <Col>
                                                        <ListGroup variant="flush" style={{ borderRadius: "15px 0px 15px 0px" }}>
                                                            {Array.from({ length: Object.keys(currentBuild).length }).map((_, idx) => (
                                                                <ListGroup.Item style={{ backgroundColor: "#ffc1078f" }}>
                                                                    <Row>
                                                                        <Col>
                                                                            {Object.values(currentBuild)[idx].brand}
                                                                        </Col>
                                                                        <Col>
                                                                            {Object.values(currentBuild)[idx].model}
                                                                        </Col>
                                                                    </Row>
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Col>
                                                    <Col>
                                                        <ListGroup variant="flush" style={{ borderRadius: "15px 0px 15px 0px" }} >
                                                            {Array.from({ length: Object.keys(selComponents).length }).map((_, idx) => (
                                                                <ListGroup.Item style={{ backgroundColor: "#19e83921" }}>
                                                                    <Row>

                                                                        <Col md={3}>
                                                                            {Object.values(selComponents)[idx].brand}
                                                                        </Col>
                                                                        <Col md={5}>
                                                                            {Object.values(selComponents)[idx].model}
                                                                        </Col>
                                                                        <Col md={3}>
                                                                            {Object.values(selComponents)[idx].price}{'€'}
                                                                        </Col>
                                                                        <Col md={1}>
                                                                            <Button size="sm" variant="success" href={Object.values(selComponents)[idx].link} target="_blank">Buy</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Col>
                                                </Row>
                                                :
                                                <Row>
                                                    <Col>
                                                        <ListGroup variant="flush" style={{ borderRadius: "15px 0px 15px 0px" }}  >
                                                            {Array.from({ length: 4 }).map((_, idx) => (
                                                                <ListGroup.Item style={{ backgroundColor: "#ffc1078f" }}>
                                                                    <Row>
                                                                        <Col>
                                                                            {Object.values(location.state.build)[idx].brand}
                                                                        </Col>
                                                                        <Col>
                                                                            {Object.values(location.state.build)[idx].model}
                                                                        </Col>
                                                                    </Row>
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Col>
                                                    <Col>
                                                        <ListGroup variant="flush" style={{ borderRadius: "15px 0px 15px 0px" }}>
                                                            <ListGroup.Item style={{ backgroundColor: "#19e83921" }}>
                                                                <Row>
                                                                    <Col md={3}>
                                                                        {comp.brand}
                                                                    </Col>
                                                                    <Col md={5}>
                                                                        {comp.model}
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        {comp.price + '€'}
                                                                    </Col>
                                                                    <Col md={1}>
                                                                        <Button size="sm" variant="success" href={comp.link}>Buy</Button>
                                                                    </Col>
                                                                </Row>
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>
                                                </Row>
                                        }
                                        <Row>
                                            <br />
                                        </Row>
                                    </Row>
                            }
                            <hr />
                            <Row >
                                <div style={{ fontSize: "20px", textAlign: "center" }}>
                                    If you want to learn how to build a gaming PC, watch the video below ↓
                                </div>
                                <Container style={{ width: "70rem", paddingBottom: "10px", paddingTop: "20px" }}>
                                    <Row >
                                        <iFrame
                                            height="400"
                                            src="https://www.youtube.com/embed/PXaLc9AYIcg"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen={true}>

                                        </iFrame>
                                    </Row>
                                    <hr />

                                    <div className="d-flex justify-content-center" style={{ padding: "15px" }}>
                                        <Link to="/">
                                            <button className="button-82-pushable bg-transparent col-4 btn-sm mx-auto" role="button" style={{ width: "18rem" }}>
                                                <span className="button-82-shadow"></span>
                                                <span className="button-82-edge"></span>
                                                <span className="button-82-front text">
                                                    <ArrowCounterclockwise />{' '}
                                                    <b>START OVER</b>
                                                </span>
                                            </button>


                                        </Link>
                                    </div>
                                </Container>
                            </Row>
                        </Card>
                    </Row>
                </Col >
            </Container>
            <br />
            < Col className="d-flex justify-content-start">
                <Button variant="warning" style={{ marginRight: "auto" }} onClick={() => navigate(-1)}>
                    <ArrowLeftCircle />{' '}<b>Back</b>
                </Button>
            </Col>

            <br />

            <div>
                <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
            </div>
        </Container >
    );
}

export default SummaryPage;