import logo from "./logo.svg";
import "./App.css";
import { CharacterBody } from "character-body";
import { Chooser } from "chooser";
import { useState } from "react";
import { TileBackground } from "tile-background";
import { TourModal } from "./tour/tour-modal";

function App() {
  const [head, setHead] = useState([
    { name: "Knight", color: "red", url: "sprite_01.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "10" },
    { name: "Robin", color: "blue", url: "sprite_05.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "10" },
    { name: "Cleric", color: "green", url: "sprite_09.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "10" },    
  ]);
  const [body, setBody] = useState([
    { name: "Knight", color: "red", url: "sprite_02.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "5" },
    { name: "Robin", color: "blue", url: "sprite_06.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "5" },
    { name: "Cleric", color: "green", url: "sprite_10.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "5" },
  ]);
  const [legs, setLegs] = useState([
    { name: "Knight", color: "red", url: "sprite_03.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "1" },
    { name: "Robin", color: "blue", url: "sprite_07.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "1" },
    { name: "Cleric", color: "green", url: "sprite_11.png", height: "160px", width: "160px", top: "0px", left: "0px", z: "1" },
  ]);

  const [selectedHead, setSelectedHead] = useState(head[0]);
  const [selectedBody, setSelectedBody] = useState(body[0]);
  const [selectedLegs, setSelectedLegs] = useState(legs[0]);

  const [characterName, setCharacterName] = useState('');
  const [tourActive, setTourActive] = useState(false);
  const [tourKey, setTourKey] = useState(0);

  const handleStartTour = () => {
    setTourKey(k => k + 1);
    setTourActive(true);
  };

  return (
    <div className="app-body">
      <button className="tour-start-btn" onClick={handleStartTour}>Start Tour</button>
      {tourActive && <TourModal key={tourKey} onClose={() => setTourActive(false)} />}
      <TileBackground></TileBackground>
      <div id='tour-header' className="app-header">Description of project and date</div>

      <div className="app-character-name" id='tour-character-name'>
        <div>Character Name</div>
            <input
      type="text"
      value={characterName}
      onChange={(e) => setCharacterName(e.target.value)}
    />
      </div>

      <div className="app-character-name" id='character-onscreen'>
        <div>{characterName}</div>
      </div>

      <div className="app-characters">
        <CharacterBody          
          selectedHead={selectedHead}
          selectedBody={selectedBody}
          selectedLegs={selectedLegs}
        ></CharacterBody>
        <Chooser          
          setSelectedHead={setSelectedHead}
          selectedHead={selectedHead}
          head={head}
          setSelectedBody={setSelectedBody}
          selectedBody={selectedBody}
          body={body}
          setSelectedLegs={setSelectedLegs}
          selectedLegs={selectedLegs}
          legs={legs}
        ></Chooser>
      </div>
      <div className="app-bottom-padding" id='character-bottom'></div>
    </div>
  );
}

export default App;
