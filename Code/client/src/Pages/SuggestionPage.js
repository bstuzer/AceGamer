import React, { useEffect, useState, } from 'react';
import { Alert, Button, Container, ProgressBar, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ArrowLeftCircle, HandIndexThumbFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import API from '../API';
import { Row, Col } from 'react-bootstrap'
import { Upgrade_build } from './functions';

export const SuggestionPage = (props) => {

  const now = 66;
  const [manual, setManual] = useState(true);
  const icons = [cpuIcon, gpuIcon, hddIcon, moboIcon, ramIcon];
  const componentType = ['CPU', 'GPU', 'HDD', 'MOBO', 'RAM'];
  const suggestionType = ["best performance", "best value for money", "best price", "best reliability"]
  const build = {
    gpu: { brand: "Nvidia", id: 5, link: null, model: "GTX 2060", price: 520 },
    mb: { brand: "Asus", id: 1, link: "https://www.amazon.it/ASUS-LGA1700-Realtek-Ethernet-Surround/dp/B09JM7Q87B/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=lga+1700&qid=1644449219&s=pc&sr=1-4", model: "Z690-P D4", price: 289 },
    ram: { brand: "Corsair", id: 2, link: "https://www.amazon.it/Corsair-Vengeance-Memoria-Illuminato-Entusiasta/dp/B07D1XCKWW/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DB1NINNYS0PF&keywords=corsair+Vengeance+RGB+PRO+DDR4+3200+C16+2x8GB&qid=1653856550&s=pc&sprefix=corsair+%2Ccomputers%2C147&sr=1-3", model: "Vengeance RGB PRO", price: 88 },
    hdd: { brand: "WD", id: 2, link: "https://www.amazon.it/WD-RED-Unit%C3%A0-Interna-Cache/dp/B083XVD1FP/ref=sr_1_1?keywords=wd+red+3tb&qid=1654811529&sprefix=wd+red+3tb%2Caps%2C136&sr=8-1", model: "Red 3TB", price: 180 }
  }

  return (
    manual ?
      <>
        <Container className='centered py-5'>
          <br /><br />
          <div fluid="true" className='text-center text-warning'>
            <Alert variant="light" className="bg-dark text-light text-center align-center" style={{ opacity: 0.9 }}>
              <Alert.Heading>We discovered that the <b>weakest component</b> of your build is the <b className='important-text'>{componentType[props.componentType]}</b>!</Alert.Heading>

            </Alert>
            <Alert variant="dark">

              {/*<a href="#" data-tooltip title={componentDetails[props.componentType]}>{infoIcon}</a> <br></br>*/}

              <p className="subtitles">Here are our <b>4 suggestions</b> for you based on our suggestion algorithm <b>↓</b><br></br>
              </p>

              <hr />
              {/*props.suggestedComponents.map((obj) => ( 
                    <Card objName = {obj}>
                        <Card.Header>CPU</Card.Header>
                            <Card.Body>
                                <Card.Title>CPU2 </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                            </Card.Body>
                    </Card>))*/}
              <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col>
                    <Card >
                      <Card.Body>
                        <Card.Title>{icons[props.componentType]} • Suggested  {componentType[props.componentType]} with "{suggestionType[idx]}" </Card.Title>
                        <hr />
                        <div className="container">
                          <div className="row">
                            <div className="col-8">
                              <Card.Text>
                                <ListGroup>
                                  <ListGroupItem>Brand: <b>{props.suggestedComponents[idx].brand}</b></ListGroupItem>
                                  <ListGroupItem>Model: <b>{props.suggestedComponents[idx].model}</b></ListGroupItem>
                                  <ListGroupItem>Price: <b>{props.suggestedComponents[idx].price}€</b></ListGroupItem>
                                </ListGroup>
                              </Card.Text>
                            </div>
                            <div className="col-4">
                              <div className="row py-5">
                                <Link to="/summary" 
                                state={{
                                  build: build, 
                                  link: "/suggestions",
                                  comp:  props.suggestedComponents[idx] 
                                }} >
                                  <Button variant="warning">
                                    SELECT
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <br />
              

            </Alert>
          </div>
          <Col className="d-flex justify-content-start">
            <Link to="/setup">
              <Button variant="warning" style={{ marginRight: "auto" }}>
                <ArrowLeftCircle />{' '}<b>Back</b>
              </Button>{'    '}
            </Link>
            {/* <Button variant="dark" style={{ marginLeft: "auto" }}>
            NEXT
          </Button> */}
          </Col>
          <br />
          <div>
            <ProgressBar variant="warning" animated now={now} label={`${now}%`} />
          </div>
        </Container>
      </> :
      <>
        <Container>
          <br /><br />
          <div className='centered py-5'>
            <Alert variant="dark" className="bg-dark text-light text-center align-center" style={{ opacity: 0.90 }} >
              <Alert.Heading>Something went wrong!</Alert.Heading>
              <p>
                It seems that our autodetection tool encountered an error!
                <div>
                  Don't worry, you can manually configurate your PC by clicking on the button below ↓
                </div>
              </p>
              <hr />
              <div className='d-flex justify-content-center'>
                <Link to="/manual_selection">
                  <Button variant='warning' size="lg">
                    <HandIndexThumbFill />{' '}<b>Manual Selection</b>
                  </Button>
                </Link>
              </div>
            </Alert>
            <Link to="/setup">
              <Button variant="warning">
                <ArrowLeftCircle />{' '}<b>Back</b>
              </Button>
            </Link>
          </div>
        </Container>
      </>


  );
};

const cpuIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
</svg>);

const gpuIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-gpu-card" viewBox="0 0 16 16">
  <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
</svg>);

const hddIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-device-hdd" viewBox="0 0 16 16">
  <path d="M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  <path d="M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z" />
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z" />
</svg>);
const moboIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-motherboard" viewBox="0 0 16 16">
  <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z" />
  <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z" />
</svg>);

const ramIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-memory" viewBox="0 0 16 16">
  <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z" />
</svg>);

export default SuggestionPage;