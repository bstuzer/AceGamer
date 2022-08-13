import './App.css';
import { NavBar } from './Pages/Navbar.js';
import { FrontPage } from './Pages/FrontPage.js';
import { DetectPage } from './Pages/DetectPage.js';
import { SuggestionPage } from './Pages/SuggestionPage.js';
import { NewConfPage } from './Pages/NewConfPage.js';
import { SummaryPage } from './Pages/SummaryPage.js';
import { InfoPage } from './Pages/InfoPage.js';
import { ManualDetectPage } from './Pages/ManualDetectPage.js';
import { ManualSuggestions } from './Pages/ManualSuggestions.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import API from './API.js';
import { useEffect, useState } from 'react';

function App() {

  const [gameNames, setGameNames] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');
  const [gameCpu, setGameCpu] = useState();
  const [gameGpu, setGameGpu] = useState();
  const [gameHdd, setGameHdd] = useState();
  const [gameRam, setGameRam] = useState();
  const [gameOpt, setGameOpt] = useState();

  const [cpus, setCpus] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [hdds, setHdds] = useState([]);
  const [mbs, setMbs] = useState([]);
  const [rams, setRams] = useState([]);
  const [myManual, setMyManual] = useState();
  const [myBuild, setMyBuild] = useState([]);

  const myGame = {name: selectedGame, cpu: gameCpu, gpu: gameGpu, hdd: gameHdd, ram: gameRam};
  useEffect(() => {
    const getMyComponents = async () => {
      const myComponents = await API.getDetectComponents();
      setMyBuild(myComponents);

    };
    getMyComponents();

  }, []);

  useEffect(() => {
    const getCpus = async () => {
      const cpu = await API.getAllCpu();
      setCpus(cpu);

    };
    getCpus();

  }, []);

  useEffect(() => {
    const getGpus = async () => {
      const gpu = await API.getAllGpu();
      setGpus(gpu);

    };
    getGpus();

  }, []);

  useEffect(() => {
    const getHdds = async () => {
      const hdd = await API.getAllHdd();
      setHdds(hdd);

    };
    getHdds();

  }, []);

  useEffect(() => {
    const getMbs = async () => {
      const mb = await API.getAllMb();
      setMbs(mb);

    };
    getMbs();

  }, []);


  useEffect(() => {
    const getRams = async () => {
      const ram = await API.getAllRam();
      setRams(ram);

    };
    getRams();

  }, []);

  const components = { cpus: cpus, gpus: gpus, rams: rams, hdds: hdds, mbs: mbs }
  
  const suggestedCpus = [{ brand:"Intel",freq: 320, id: 1, model: "i9-12900K",price: 665 , rating: 1140,reliability: 43, socket: "LGA1700", link: "https://www.amazon.it/s?k=i5+12600k&crid=2DVNX1ICKZYLN&sprefix=i5+12%2Caps%2C292&ref=nb_sb_ss_ts-doa-p_1_5"},
  { brand:"Intel",freq: 490,id: 10,model: "i5-12600k", price: 340, rating: 1090,reliability: 103, socket: "LGA1700",link: "https://www.amazon.it/Intel-i5-12600K-Processore-generazione-frequenza/dp/B09GYHXDHH/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1TG7GOZGHEC65&keywords=i5-12600K&qid=1654810136&sprefix=i5-12600k%2Caps%2C156&sr=8-1"},
  { brand:"Intel",freq: 330,id: 13,model: "i3-12100k",price: 165, rating: 930,reliability: 1, socket: "LGA1700",link:"https://www.amazon.it/Intel-CPU-12100-LGA-1700/dp/B09NPHJLPT/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OBWSNW1STG5N&keywords=i3-12100&qid=1654810184&sprefix=i3-12100%2Caps%2C220&sr=8-1"},
  { brand:"Intel",freq: 500, id: 12, model: "i7-12700k", price: 460, rating: 1140, reliability: 127, socket: "LGA1700",link: "https://www.amazon.it/Intel-BX8071512700K-Core-i7-12700K-dissipatore/dp/B09GYJ5P98/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=56C6MZT1P64K&keywords=i7-12700K&qid=1654810162&sprefix=i7-12700k%2Caps%2C194&sr=8-1"},
  ];

  useEffect(() => {
    const getGameNames = async () => {
      const gameNames = await API.getAllGameNames();
      setGameNames(gameNames);

    };
    getGameNames();
  }, []);

  return (
    <div id="animatedBackground" >
      <Router>
        <NavBar />

        <>
          <Routes>
            <Route exact path='/' element={
              <FrontPage
                gameNames={gameNames}
                updateGame={setSelectedGame}
                selectedGame={selectedGame}
                updateCpu={setGameCpu}
                updateGpu={setGameGpu}
                updateRam={setGameRam}
                updateHdd={setGameHdd}
                updateOpt={setGameOpt}
              />}
            />

            <Route path='/setup' element={<DetectPage selectedGame={selectedGame} />} />

            <Route path='/new_configuration' element={<NewConfPage
              selectedGame={selectedGame}
              cpu={gameCpu}
              gpu={gameGpu}
              ram={gameRam}
              hdd={gameHdd}
              opt={gameOpt}
              components={components}
            />}
            />

            <Route path='/suggestion' element={<SuggestionPage
              selectedGame={selectedGame}
              components={components}
              myManual={myManual}
              suggestedComponents={suggestedCpus}
              componentType={0} />} />

            <Route path='/summary' element={<SummaryPage
              selectedGame={selectedGame}
              cpu={gameCpu}
              gpu={gameGpu}
              ram={gameRam}
              hdd={gameHdd}
              components={components} />} />

            <Route path="/info" element={<InfoPage />} />

            <Route path="/manual_selection" element={<ManualDetectPage
              updateManual={setMyManual}
              components={components} />} />

            <Route path='manual_suggestions' element={<ManualSuggestions
              components={components}
              myManualPc={myManual}
              selectedGame={myGame}
              gameName={selectedGame}
            />} />

          </Routes>
        </>
      </Router>

    </div>

  );
};

export default App;