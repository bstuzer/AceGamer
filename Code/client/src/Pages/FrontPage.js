import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, ProgressBar, Form, Toast } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import API from '../API';
import Select from 'react-select'

export const FrontPage = (props) => {
    const now = 0;
    const [clicked, setClicked] = useState();
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [show, setShow] = useState();

    useEffect(() => {
        const getGame = async () => {
            const game = await API.getGame(name);
            props.updateCpu(game.cpu);
            props.updateGpu(game.gpu);
            props.updateRam(game.ram);
            props.updateHdd(game.hdd);
            props.updateOpt(game.opt);
        }
        getGame()
            .then(() => {
                props.updateGame(name);
                setShow(true);
                setMessage('');
            })
            .catch((err) => {
                setMessage({
                    msg: "Type another game",
                    type: "danger",
                });
                setClicked(false);
                setShow(false);
                props.updateGame('');
                props.updateCpu();
                props.updateGpu();
                props.updateRam();
                props.updateHdd();
                props.updateOpt();
            });
    }, [clicked]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        if (name === '' || name.length > 40) {
            valid = false;
        }
        if (valid) {
            setClicked(true);
        } else {
            setName('');
            setClicked(false);
        }
    };

    return show ? <Navigate to="/setup" /> : (
        <>
            <Container className="centered py-5">
                <br /><br />
                <div fluid="true" className='text-center text-warning'>
                    <Alert variant="dark" style={{ opacity: 0.9 }}>
                        <Alert.Heading><h2>Welcome! Just specify a game below to start!</h2></Alert.Heading>
                        {/*<p>
                            <em>What is happening here? You can click on <a href="/info" className="link-secondary">Learn More</a> now, or at any step you need.</em>
                        </p>*/}
                        <hr />

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 justify-content-center" controlId='validationGameName'>
                                {/*<Form.Control required type="text" list="game-names" placeholder='Your Game Name' onChange={(e) => (setName(e.target.value))} />*/}
                                <Form.Control.Feedback type='invalid'>Insert a correct game name!</Form.Control.Feedback>

                                {/*<Form.Select aria-label="Default select example" onChange={(e) => (setName(e.target.value))}>
                                       {props.gameNames.map(g => <option value={g.name}>{g.name}</option>).sort()}</Form.Select>*/}

                                <Select
                                    label="Single select"
                                    placeholder={<div>Please select or type a game...</div>}
                                    theme={(theme) => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            text: 'orangered',
                                            primary25: 'gold',
                                            primary: 'black',
                                        },
                                    })} options={props.gameNames.map(g => { return Object.fromEntries(new Map([['value', g.name], ['label', g.name]])) })} onChange={(e) => (setName(e.value))} />

                                {/*<datalist id="game-names">
                                        {props.gameNames.map(g => <option key={g.name} value={g.name} />).sort()} </datalist>*/}

                                {message !== '' ?
                                    <Toast bg={"danger"} onClose={setMessage('')} delay={3000} autohide>
                                        <Toast.Body className={"text-white"}>{message?.msg}</Toast.Body>
                                    </Toast> : null
                                }

                                <br />
                                <button className="button-82-pushable bg-transparent col-4 btn-sm mx-auto" role="button" type="submit">
                                    <span className="button-82-shadow"></span>
                                    <span className="button-82-edge"></span>
                                    <span className="button-82-front text">
                                        <img src={require('../Images/startButton.png')} className="img-fluid" alt='hdd' width={120} />
                                    </span>
                                </button>
                            </Form.Group>
                        </Form>

                    </Alert>
                </div>

                <br />
            </Container>
        </>


    )

};

export default FrontPage;