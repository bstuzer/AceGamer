import { Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ArrowLeftCircle, CpuFill, GpuCard, HddFill, Memory, MotherboardFill, SuitSpadeFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export const InfoPage = (props) => {

    const navigate = useNavigate();

    return (
        <Container className="centered py-5">
            <div className="text-light text-center py-5">
                <br />
                <h3><b>How does the application work? ↓</b></h3>
                <br />
                <img className="col-md-5" src={require('../Images/appFlow.png')} class="img-fluid" alt='appInfo' />
                <br /><br /><br />
                <h3><b>Learn more about the components ↓</b></h3>


            </div>

            <Tab.Container defaultActiveKey="motherboard" >
                <Row>
                    <Col sm={3} className="responsive-font">
                        <Nav variant="pills" className="flex-column bg-dark">
                            <Nav.Item>
                                <Nav.Link className="text-warning" eventKey="motherboard"><MotherboardFill />{' '}<b>Motherboard</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-warning" eventKey="cpu"><CpuFill />{' '}<b>CPU</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-warning" eventKey="gpu"><GpuCard />{' '}<b>GPU</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-warning" eventKey="ram"><Memory />{' '}<b>RAM</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-warning" eventKey="hdd"><HddFill />{' '}<b>HDD/SSD</b></Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>

                    <Col sm={9} className="bg-dark text-light text-center align-center">
                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="motherboard">
                                <br />
                                <img src={require('../Images/motherboard.png')} alt='motherboard' width={150} />
                                <br /><br />
                                The Motherboard is the nervous system of the computer and it allows all the components
                                to talk with one another to coordinate in order to run programs.
                                <br /><br />
                                The components that coordinate through them include <b>CPUs (central processing units/processors)</b>, <b>RAM (memory)</b> and chipsets (the component that manages the data flow between the processor, memory and peripherals). Along with external peripherals such as the <b>GPU (graphics processing unit)</b>, Ethernet and Wi-Fi.
                                <br /><br />
                                Motherboards mostly have specific CPU sockets, therefore the users must take into account the compatibility between the motherboard and the CPU they are willing to buy. Along with the CPU compatibility, the compatibility of other components if necessary must be checked as well.
                                <br /><br />
                                Here in <b>AceGamer</b>, we make sure every component is compatible with each other.
                                <br /><br />
                            </Tab.Pane>
                            <Tab.Pane eventKey="cpu">
                                <br />
                                <img src={require('../Images/cpu.png')} alt='cpu' width={110} />
                                <br /><br />
                                The CPU (central processing unit), or more commonly the processor, is the brain of the computer and just like the brain,
                                his task is to tell all the other components what to do following the instructions given by
                                programs. Therefore it is <b>one of the most important components for a fast and reliable gaming PC.</b>
                                <br /><br />
                                The market for the CPUs is mostly dominated by two companies: <b>Intel</b> and <b>AMD</b>.
                                While AMD is providing CPUs that are more affordable in comparison with good price-performance ratios, some users still prefer Intel CPUs for the reliability of the brand and the benchmark results for certain workloads.
                                <br /><br />
                                When selecting a CPU, one should consider its <b>number of cores</b> and <b>frequency</b>. The frequency of the CPU represents how many times the internal clock inside the CPU ticks in cycles per second.
                                That's the reason why a high frequency rate is a requirement for a faster performance.
                                <br /><br />
                            </Tab.Pane>
                            <Tab.Pane eventKey="gpu">
                                <br />
                                <img src={require('../Images/gpu.png')} alt='gpu' width={120} />
                                <br /><br />
                                The GPU (graphics processing unit) is the component used for processing everything you see on your monitor, it is fundamental
                                for games since it is what the computer relies on to render every graphic element in real-time.
                                <br /><br />
                                When purchasing a GPU, one should consider the <b>frequency of the GPU and its VRAM (video RAM)</b>.
                                Pretty much like CPU frequency, GPU frequency is the measure of the number of cycles happening per second.
                                <br /><br />
                                For example, having a poorly performing GPU will result in a lower <b>FPS (frames per second)</b>,
                                which is the amount of times that the monitor refreshes what you are seeing every second,
                                which will greatly affect your gaming experience and performance.
                                <br /><br />
                                Therefore, <b>higher frequency</b> for a GPU means faster video rendering, which results in a smoother gaming experience.
                                <br /><br />
                            </Tab.Pane>
                            <Tab.Pane eventKey="ram">
                                <br />
                                <img src={require('../Images/ram.png')} alt='ram' width={130} />
                                <br /><br />
                                The RAM (random access memory) is the component where your programs are loaded once they are taken from your HDD to be executed.
                                The main features of a RAM is its <b>size and frequency</b>. Every program/game has a minimum RAM size requirement that
                                needs to be fulfilled for it to run smoothly.
                                <br /><br />
                                When there's no RAM enough to handle the data and program instructions used by the CPU, lesser-used instructions move to virtual memory, where they stay there until they're needed again.
                                This causes the CPU to slow down, therefore <b>it is crucial to have plenty of RAM</b>.
                                <br /><br />
                                Just as for the CPU and the GPU, the RAM <b>frequency is the speed at which the RAM operates</b>.
                                <br /><br />
                                While the <b>size requirement is almost mandatory</b>, the <b>speed affects the performance</b>, so having enough RAM size
                                but with low speed will result in your game experiencing long load times or stuttering.
                                <br /><br />
                            </Tab.Pane>
                            <Tab.Pane eventKey="hdd">
                                <br />
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <img src={require('../Images/hdd.png')} alt='hdd' width={120} />
                                    </Col>
                                    <Col>
                                        <img src={require('../Images/ssd.png')} alt='ssd' width={120} />
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <br />
                                The HDD and the SSD are the components where all your data, such as photos, videos or programs are stored, waiting
                                to be accessed.
                                <br /><br />
                                In comparison, SSDs are still evidently more expensive than HDDs. Therefore, as long as it has enough capacity to store the games, and is fast enough to support the graphics, <b>one can choose an HDD for a gaming PC build as a cheaper option</b>.
                                However, SSDs have started to dominate the market with their significantly better performance and slowly decreasing prices.
                                <br /><br />
                                Whether you have an HDD or an SSD, <b>the speed of reading and writing on your storage component affects the overall speed of your system. </b>
                                For example, if you have a huge capacity in your HDD/SSD but the access time is slow, it will result in a poorly performing computer.
                                While SSDs are performing significantly better than HDDs, one can still take this measure to choose between the options of both alternatives.
                                <br /><br />
                            </Tab.Pane>


                        </Tab.Content>

                    </Col>
                </Row>
            </Tab.Container>

            <div className="text-light text-center py-5" style={{ padding: "30px"}}>

                <h4><b>Learn how to build a PC ↓</b></h4>
                <br />
                <iFrame
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/PXaLc9AYIcg"
                    allowFullScreen>
                </iFrame>
            </div>

            <br />
            <div className="mb-3 text-center justify-content-center">
                <button className="button-82-pushable bg-transparent col-4 btn-sm mx-auto" role="button" onClick={() => navigate(-1)}>
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        <ArrowLeftCircle /><b> Back</b>
                    </span>
                </button>
            </div>
        </Container >



    );


};

export default InfoPage;