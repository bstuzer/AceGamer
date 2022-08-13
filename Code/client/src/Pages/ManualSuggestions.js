import { Alert, Button, Container, Form, Row, Col, Card, ListGroup, ListGroupItem, ProgressBar } from "react-bootstrap";
import { ArrowLeftCircle, Controller, List, Play, ArrowCounterclockwise, CheckAll } from "react-bootstrap-icons";
import { Upgrade_build } from "./functions";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const ManualSuggestions = (props) => {

    const now = 66;
    const [validated, setValidated] = useState(false);
    const [move, setMove] = useState(false);
    const [link, setLink] = useState('/manual_suggestions');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setValidated(true);
            setMove(true);
        }
    };


    const upBuild = Upgrade_build(props.selectedGame, props.myManualPc, props.components, 100000);


    let build = {
        cpu: { ...props.components.cpus.filter(t => t.id === props.myManualPc.cpu)[0] },
        gpu: { ...props.components.gpus.filter(t => t.id === props.myManualPc.gpu)[0] },
        hdd: { ...props.components.hdds.filter(t => t.id === props.myManualPc.hdd)[0] },
        ram: { ...props.components.rams.filter(t => t.id === props.myManualPc.ram)[0] },
        mb: { ...props.components.mbs.filter(t => t.id === props.myManualPc.mb)[0] }
    }

    let selectedBuild = {};

    const [suggestedBuild, setSuggestedBuild] = useState(build);
    const [selectedComponents, setSelectedComponents] = useState(selectedBuild);

    const suggestionType = ["Best Price", "Best Performance", "Best Value for Money", "Best Reliability"]
    // const componentType = ['CPU', 'GPU', 'HDD', 'MOBO', 'RAM'];
    const sugegestedTypes = upBuild[0];
    const icons = [cpu, gpu, hdd, mb, ram];

    if (upBuild[0].length === 0) {
        return (
            <Container className="centered py-5">
                <br /> <br />
                <Alert variant="dark" style={{ opacity: 0.9 }} className="bg-dark text-light text-center align-center">
                    <Alert.Heading>
                        The components you selected already satisfy
                        <div><b>{props.gameName}</b>
                            {' '}requirements.
                        </div>
                        <div>
                            <br/>
                            If you think something went wrong, please try again with component selection or select a new game.
                        </div>
                    </Alert.Heading>
                    <hr />
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Link to="/manual_selection">
                                <Button variant="warning" style={{ minWidth: "8rem", minHeight: "2rem" }}>
                                    <ArrowLeftCircle />{' '}
                                    <b>Try Again</b>
                                </Button>
                            </Link>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Link to="/">
                                <Button variant="warning" style={{ minWidth: "8rem", minHeight: "2rem" }}>
                                    <Play />{' '}<b>New Game</b>
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Alert>
            </Container >
        )
    };
    return (
        move ?
            <Navigate to="/summary" state={{ build: suggestedBuild, link: link, selBuild: selectedComponents }} />
            :
            <Container className="centered py-5 ">
                <br /><br />
                <Alert variant="dark" style={{ opacity: 0.9 }} className="bg-dark text-light text-center align-center">
                    <Alert.Heading className="text-center">
                        Your PC has exactly <b>{upBuild[0].length} component(s)</b> to be replaced!
                        <div>
                            Please choose one from the 4 alternatives we suggest you for each component <b>↓</b>
                        </div>
                    </Alert.Heading>
                    </Alert>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {Array.from({ length: upBuild[0].length }).map((_, idxEx) => (
                            <Alert variant="dark" className="bg-gray-800 text-center">
                                <div className="text-dark" style={{ height: "60px", fontSize: "30px" }}>
                                    Select the <b>{sugegestedTypes[idxEx].toUpperCase()}</b> you would like to pick <b>↓</b>
                                </div>
                                <Row xs={1} md={2} className="g-4">
                                    {Array.from({ length: 4 }).map((_, idxIn) => (
                                        <Col>
                                            <Card >
                                                <Card.Body>
                                                    <Card.Title><h4><b>{suggestionType[idxIn]}</b></h4></Card.Title>
                                                    <Card.Text>
                                                        <ListGroup>
                                                            <ListGroupItem>Brand: <b>{upBuild[idxIn + 1][idxEx].brand}</b></ListGroupItem>
                                                            <ListGroupItem>Model: <b>{upBuild[idxIn + 1][idxEx].model}</b></ListGroupItem>
                                                            <ListGroupItem>Price: <b>{upBuild[idxIn + 1][idxEx].price}€</b></ListGroupItem>
                                                        </ListGroup>
                                                    </Card.Text>
                                                    {['radio'].map((type) => (
                                                        <div key={`inline-${type}`} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Check
                                                                    required
                                                                    inline
                                                                    feedback="You must select one of the options before submitting"
                                                                    feedbackType="invalid"
                                                                    /*label={"Option " + (idxIn + 1)}*/
                                                                    name={"group" + idxEx}
                                                                    type={type}
                                                                    id={`inline-${type}-` + idxEx}
                                                                    onChange={() => {

                                                                        const source = Object.keys(build).filter(t => t === upBuild[0][idxEx]).reduce((obj, key) => {
                                                                            return Object.assign(obj, { [key]: upBuild[idxIn + 1][idxEx] });
                                                                        }, {});

                                                                        switch (upBuild[0][idxEx]) {
                                                                            case "cpu":
                                                                                build.cpu = { ...source.cpu };
                                                                                selectedBuild.cpu = { ...source.cpu };
                                                                                break;

                                                                            case "gpu":
                                                                                build.gpu = { ...source.gpu };
                                                                                selectedBuild.gpu = { ...source.gpu };

                                                                                break;

                                                                            case "ram":
                                                                                build.ram = { ...source.ram };
                                                                                selectedBuild.ram = { ...source.ram };
                                                                                break;

                                                                            case "hdd":
                                                                                build.hdd = { ...source.hdd };
                                                                                selectedBuild.hdd = { ...source.hdd };
                                                                                break;

                                                                            default:
                                                                                break;
                                                                        }

                                                                        setSuggestedBuild(...build);
                                                                        setSelectedComponents(...selectedBuild);
                                                                    }}
                                                                />
                                                            </Form.Group>
                                                        </div>
                                                    ))}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                                <hr />
                            </Alert>
                        ))}
                          <Row className="bg-gray-800 text-center">
                    <div>
                        <Button variant="success" type="submit" ><CheckAll />{' '}Done</Button>
                    </div>
                    </Row>
                    </Form>
                    <br/>
                <div className="d-flex justify-content-start">
                    <Link to="/manual_selection" >
                        <Button variant="warning"><ArrowCounterclockwise />{' '}<b>Start Manual Selection Over</b></Button>
                    </Link>
                </div>
                <br />
                <ProgressBar variant="warning" animated now={now} label={`${now}%`} />

            </Container>

    );
}
const cpu = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
</svg>);

const gpu = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-gpu-card" viewBox="0 0 16 16">
    <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
    <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
</svg>);

const hdd = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-device-hdd" viewBox="0 0 16 16">
    <path d="M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z" />
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z" />
</svg>);
const mb = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-motherboard" viewBox="0 0 16 16">
    <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z" />
    <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z" />
</svg>);

const ram = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-memory" viewBox="0 0 16 16">
    <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z" />
</svg>);

export default ManualSuggestions;