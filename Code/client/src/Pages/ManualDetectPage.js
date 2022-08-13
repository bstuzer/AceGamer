import { Alert, Button, Container, Form, Row, Col, ProgressBar, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Cpu, Gear, GpuCard, Hdd, Memory, Motherboard, ArrowLeftCircle, ArrowRightCircle, CheckAll } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Select from 'react-select';

export const ManualDetectPage = (props) => {

    const [now, setNow] = useState(40);
    const [step, setStep] = useState(0);
    const [show, setShow] = useState(false);

    const [pcMb, setPcMb] = useState("");
    const [pcCpu, setPcCpu] = useState("");
    const [pcGpu, setPcGpu] = useState("");
    const [pcHdd, setPcHdd] = useState("");
    const [pcRam, setPcRam] = useState("");

    const [sideCpu, setSideCpu] = useState("");
    const [sideGpu, setSideGpu] = useState("");
    const [sideRam, setSideRam] = useState("");
    const [sideHdd, setSideHDD] = useState("");

    const mypc = { mb: parseInt(pcMb.split("_")[0]), cpu: pcCpu, gpu: pcGpu, hdd: pcHdd, ram: pcRam };
    console.log(mypc);
    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if (step === 0) {
            if (pcMb === '' || pcMb.length > 50) {
                valid = false;
            }
            if (valid === true) {
                setNow((now) => (now + 5));
                setStep((step) => (step + 1));
                setShow(true);
            }
        }
        if (step === 1) {
            if (pcCpu === '' || pcCpu.length > 50) {
                valid = false;
            }
            if (valid === true) {
                setNow((now) => (now + 5));
                setStep((step) => (step + 1));
            }
        }
        if (step === 2) {
            if (pcGpu === '' || pcGpu.length > 50) {
                valid = false;
            }
            if (valid === true) {
                setNow((now) => (now + 5));
                setStep((step) => (step + 1));
            }
        }
        if (step === 3) {
            if (pcRam === '' || pcRam.length > 50) {
                valid = false;
            }
            if (valid === true) {
                setNow((now) => (now + 5));
                setStep((step) => (step + 1));
            }
        }
        if (step === 4) {
            if (pcHdd === '' || pcHdd.length > 50) {
                valid = false;
            }
            if (valid === true) {
                setNow((now) => (now + 5));
                setStep((step) => (step + 1));
                props.updateManual(mypc);
            }
        }
    };

    const handleBack = (event) => {
        event.preventDefault();

        setNow((now) => (now - 5));
        setStep((step) => (step - 1));


        switch (step - 1) {
            case 0:
                setPcMb("");
                setShow(false);
            case 1:
                setPcCpu("");
            case 2:
                setPcGpu("");
            case 3:
                setPcRam("");
            case 4:
                setPcHdd("");
            default: break;
        }
    }

    return (
        <>
            <br /><br />

            <Row>
                {
                    show ?
                        <Col md="auto" lg="auto" className="py-5" style={{ margin: 0 }}>
                            <Alert variant="dark" className="bg-dark text-light" style={{ opacity: 0.9, borderRadius: "0px 20px 20px 0px", borderColor: "#24272b", paddingBottom: 0, marginBottom: 5}}>
                                <Alert.Heading >
                                    Selected components:
                                </Alert.Heading>
                            </Alert>
                            <ListGroup variant='flush' className="d-flex justify-content-start" style={{ opacity: 0.9, borderRadius: "0px 20px 20px 0px", fontSize: "16px", fontWeight: "bold"}} >
                                {pcMb !== "" ?
                                    <ListGroupItem className="bg-dark text-light"><Motherboard />{' '}{pcMb.substring(2)}</ListGroupItem> : null
                                }
                                {pcCpu !== "" ?
                                    <ListGroupItem className="bg-dark text-light"><Cpu />{' '}{sideCpu}</ListGroupItem> : null
                                }
                                {pcGpu !== "" ?
                                    <ListGroupItem className="bg-dark text-light"><GpuCard />{' '}{sideGpu}</ListGroupItem> : null
                                }
                                {pcRam !== "" ?
                                    <ListGroupItem className="bg-dark text-light"><Memory />{' '}{sideRam}</ListGroupItem> : null
                                }
                                {pcHdd !== "" ?
                                    <ListGroupItem className="bg-dark text-light"><Hdd />{' '}{sideHdd}</ListGroupItem> : null
                                }
                            </ListGroup>
                        </Col> : null
                }

                <Col>
                    <Container className="centered py-5 ">
                        <Alert variant="dark" className="bg-dark text-light text-center align-center" style={{ opacity: 0.90 }}  >
                            <Alert.Heading style={{ fontSize: "20px" }}>
                                Select <b>step by step</b> each component of your PC.
                                <div>
                                    At the end of the procedure you will be informed which one <b>needs</b> to be changed.
                                </div>
                            </Alert.Heading>
                        </Alert>
                        {
                            step === 0 ?
                                <>
                                    {/* -------------------------------------MOTHERBOARD--------------------------------- */}
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            < Row >
                                                <Form.Group md='auto' controlId="validationMotherboard">
                                                    <Alert variant="dark">
                                                        <Form.Label>
                                                            <Motherboard />{' '}<b>Motherboard</b>
                                                        </Form.Label>
                                                        <Row>
                                                            <Col>

                                                                <Form.Control.Feedback>Good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please choose a valid brand
                                                                </Form.Control.Feedback>

                                                                <Select
                                                                    label="Single select"
                                                                    placeholder={<div>Please select your Motherboard...</div>}
                                                                    theme={(theme) => ({
                                                                        ...theme,
                                                                        borderRadius: 0,
                                                                        colors: {
                                                                            ...theme.colors,
                                                                            text: 'orangered',
                                                                            primary25: 'gold',
                                                                            primary: 'black',
                                                                        },
                                                                    })} options={props.components.mbs.map(g => { return Object.fromEntries(new Map([['value', g.id + "_" + g.model], ['label', g.brand + " " + g.model]])) })}
                                                                    onChange={(e) => (setPcMb(e.value))} />
                                                            </Col>
                                                        </Row>
                                                    </Alert>

                                                    <Row>
                                                        <Col className="d-flex justify-content-start">
                                                            <Link to="/setup">
                                                                <Button variant="warning" >
                                                                    <ArrowLeftCircle />{' '}<b>Back</b>
                                                                </Button>
                                                            </Link>
                                                        </Col>

                                                        {pcMb !== "" ?
                                                            <Col className="d-flex justify-content-end">
                                                                <Button type="submit" variant="warning" >
                                                                    <ArrowRightCircle />{' '}<b>Next</b>
                                                                </Button>
                                                            </Col> : null}
                                                    </Row>
                                                </Form.Group>
                                            </Row>
                                        </div>
                                    </Form>

                                    <br />
                                    <div>
                                        <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                                    </div>
                                </>
                                : null
                        }
                        {
                            step === 1 ?
                                <>
                                    {/* -------------------------------------CPU--------------------------------- */}
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            < Row >
                                                <Form.Group md='auto' controlId="validationMotherboard">
                                                    <Alert variant="dark">
                                                        <Form.Label><Cpu />{' '}<b>CPU</b></Form.Label>
                                                        <Row>
                                                            <Col>

                                                                <Form.Control.Feedback>Good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please choose a valid brand
                                                                </Form.Control.Feedback>
                                                                <Select
                                                                    label="Single select"
                                                                    placeholder={<div>Please select your CPU...</div>}
                                                                    theme={(theme) => ({
                                                                        ...theme,
                                                                        borderRadius: 0,
                                                                        colors: {
                                                                            ...theme.colors,
                                                                            text: 'orangered',
                                                                            primary25: 'gold',
                                                                            primary: 'black',
                                                                        },
                                                                    })} options={props.components.cpus.filter((t) => props.components.mbs.filter((e) => e.model === pcMb.split("_")[1])[0].socket === t.socket).map(g => { return Object.fromEntries(new Map([['value', g.id], ['label', g.brand + " " + g.model]])) })}
                                                                    onChange={(e) => { (setPcCpu(e.value)); setSideCpu(e.label) }}
                                                                />

                                                            </Col>
                                                        </Row>
                                                    </Alert>
                                                    <Row >
                                                        <Col className="d-flex justify-content-start">

                                                            <Button variant="warning" onClick={handleBack}>
                                                                <ArrowLeftCircle />{' '}<b>Back</b>
                                                            </Button>
                                                        </Col>
                                                        {
                                                            pcCpu !== "" ?
                                                                <Col className="d-flex justify-content-end">
                                                                    <Button type="submit" variant="warning" >
                                                                        <ArrowRightCircle />{' '}<b>Next</b>
                                                                    </Button>
                                                                </Col> : null
                                                        }
                                                    </Row>
                                                </Form.Group>
                                            </Row>
                                        </div>
                                    </Form>

                                    <br />
                                    <div>
                                        <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                                    </div>
                                </>
                                : null
                        }
                        {
                            step === 2 ?
                                <>
                                    {/* -------------------------------------GPU--------------------------------- */}
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            < Row >
                                                <Form.Group md='auto' controlId="validationMotherboard">
                                                    <Alert variant="dark">
                                                        <Form.Label><GpuCard />{' '}<b>GPU</b></Form.Label>
                                                        <Row>
                                                            <Col>

                                                                <Form.Control.Feedback>Good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please choose a valid brand
                                                                </Form.Control.Feedback>

                                                                <Select
                                                                    label="Single select"
                                                                    placeholder={<div>Please select your GPU...</div>}
                                                                    theme={(theme) => ({
                                                                        ...theme,
                                                                        borderRadius: 0,
                                                                        colors: {
                                                                            ...theme.colors,
                                                                            text: 'orangered',
                                                                            primary25: 'gold',
                                                                            primary: 'black',
                                                                        },
                                                                    })} options={props.components.gpus.map(g => { return Object.fromEntries(new Map([['value', g.id], ['label', g.brand + " " + g.model]])) })}
                                                                    onChange={(e) => { (setPcGpu(e.value)); setSideGpu(e.label) }} />

                                                            </Col>


                                                        </Row>
                                                    </Alert>
                                                    <Row >
                                                        <Col className="d-flex justify-content-start">

                                                            <Button variant="warning" onClick={handleBack}>
                                                                <ArrowLeftCircle />{' '}<b>Back</b>
                                                            </Button>

                                                        </Col>
                                                        {
                                                            pcGpu !== "" ?
                                                                < Col className="d-flex justify-content-end">
                                                                    <Button type="submit" variant="warning" >
                                                                        <ArrowRightCircle />{' '}<b>Next</b>
                                                                    </Button>
                                                                </Col> : null
                                                        }
                                                    </Row>
                                                </Form.Group>
                                            </Row>
                                        </div>
                                    </Form>

                                    <br />
                                    <div>
                                        <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                                    </div>
                                </>
                                : null
                        }
                        {
                            step === 3 ?
                                <>
                                    {/* -------------------------------------RAM--------------------------------- */}
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            < Row >
                                                <Form.Group md='auto' controlId="validationMotherboard">
                                                    <Alert variant="dark">
                                                        <Form.Label><Memory />{' '}<b>RAM</b></Form.Label>
                                                        <Row>
                                                            <Col>

                                                                <Form.Control.Feedback>Good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please choose a valid brand
                                                                </Form.Control.Feedback>

                                                                <Select
                                                                    label="Single select"
                                                                    placeholder={<div>Please select your RAM...</div>}
                                                                    theme={(theme) => ({
                                                                        ...theme,
                                                                        borderRadius: 0,
                                                                        colors: {
                                                                            ...theme.colors,
                                                                            text: 'orangered',
                                                                            primary25: 'gold',
                                                                            primary: 'black',
                                                                        },
                                                                    })} options={props.components.rams.filter((t) => props.components.mbs.filter((e) => e.model === pcMb.split("_")[1])[0].ram === t.type).map(g => { return Object.fromEntries(new Map([['value', g.id], ['label', g.brand + " " + g.model]])) })}
                                                                    onChange={(e) => { (setPcRam(e.value)); setSideRam(e.label) }} />

                                                            </Col>
                                                        </Row>
                                                    </Alert>
                                                    <Row>
                                                        <Col className="d-flex justify-content-start">

                                                            <Button variant="warning" onClick={handleBack}>
                                                                <ArrowLeftCircle />{' '}<b>Back</b>
                                                            </Button>
                                                        </Col>
                                                        {
                                                            pcRam !== "" ?
                                                                <Col className="d-flex justify-content-end">
                                                                    <Button type="submit" variant="warning" >
                                                                        <ArrowRightCircle />{' '}<b>Next</b>
                                                                    </Button>
                                                                </Col> : null
                                                        }
                                                    </Row>
                                                </Form.Group>
                                            </Row>
                                        </div>
                                    </Form>

                                    <br />
                                    <div>
                                        <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                                    </div>
                                </>
                                : null
                        }
                        {
                            step === 4 ?
                                <>
                                    {/* -------------------------------------HDD--------------------------------- */}
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            < Row >
                                                <Form.Group md='auto' controlId="validationHdd">
                                                    <Alert variant="dark">
                                                        <Form.Label><Hdd />{' '}<b>HDD/SSD</b></Form.Label>
                                                        <Row>
                                                            <Col>

                                                                <Form.Control.Feedback>Good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Please choose a valid brand
                                                                </Form.Control.Feedback>

                                                                <Select
                                                                    label="Single select"
                                                                    placeholder={<div>Please select your HDD or SSD here...</div>}
                                                                    theme={(theme) => ({
                                                                        ...theme,
                                                                        borderRadius: 0,
                                                                        colors: {
                                                                            ...theme.colors,
                                                                            text: 'orangered',
                                                                            primary25: 'gold',
                                                                            primary: 'black',
                                                                        },
                                                                    })} options={props.components.hdds.map(g => { return Object.fromEntries(new Map([['value', g.id], ['label', g.brand + " " + g.model]])) })}
                                                                    onChange={(e) => { (setPcHdd(e.value)); setSideHDD(e.label) }} />

                                                            </Col>
                                                        </Row>
                                                    </Alert>
                                                    <Row>
                                                        <Col className="d-flex justify-content-start">
                                                            <Link to="/suggestion">
                                                                <Button variant="warning" onClick={handleBack}>
                                                                    <ArrowLeftCircle />{' '}<b>Back</b>
                                                                </Button>
                                                            </Link>
                                                        </Col>
                                                        {
                                                            pcHdd !== "" ?
                                                                < Col className="d-flex justify-content-end">
                                                                    <Button type="submit" variant="success" >
                                                                        <CheckAll />{' '}<b>Done</b>
                                                                    </Button>
                                                                </Col> : null
                                                        }
                                                    </Row>
                                                </Form.Group>
                                            </Row>
                                        </div>
                                    </Form>
                                    <br />
                                    <div>
                                        <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
                                    </div>
                                </>
                                : null
                        }


                        {
                            step === 5 ?
                                <>
                                    {
                                        step === 5 ?

                                            <Navigate to="/manual_suggestions" />
                                            : null
                                    }
                                </> : null
                        }
                    </Container >
                </Col>
            </Row>
        </>

    );
};

export default ManualDetectPage;