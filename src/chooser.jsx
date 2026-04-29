import { ArrowButton } from "arrow-button";
import "./chooser.css";
function MyButton() {
  return <button className="chooser-button">⚔️</button>;
}
function Chooser({
  selectedHead,
  setSelectedHead,
  head,
  selectedBody,
  setSelectedBody,
  body,
  selectedLegs,
  setSelectedLegs,
  legs,
}) {
  const moveheadleft = () => {
    const currentIndex = head.findIndex((h) => h.name === selectedHead.name);
    const newIndex = (currentIndex - 1 + head.length) % head.length;
    setSelectedHead(head[newIndex]);
  };
  const moveheadright = () => {
    const currentIndex = head.findIndex((h) => h.name === selectedHead.name);
    const newIndex = (currentIndex + 1) % head.length;
    setSelectedHead(head[newIndex]);
  };

  const movebodyleft = () => {
    const currentIndex = body.findIndex((b) => b.name === selectedBody.name);
    const newIndex = (currentIndex - 1 + body.length) % body.length;
    setSelectedBody(body[newIndex]);
  };
  const movebodyright = () => {
    const currentIndex = body.findIndex((b) => b.name === selectedBody.name);
    const newIndex = (currentIndex + 1) % body.length;
    setSelectedBody(body[newIndex]);
  };

  const movelegleft = () => {
    const currentIndex = legs.findIndex((l) => l.name === selectedLegs.name);
    const newIndex = (currentIndex - 1 + legs.length) % legs.length;
    setSelectedLegs(legs[newIndex]);
  };
  const movelegright = () => {
    const currentIndex = legs.findIndex((l) => l.name === selectedLegs.name);
    const newIndex = (currentIndex + 1) % legs.length;
    setSelectedLegs(legs[newIndex]);
  };

  return (
    <div className="chooser-container">
      <div className="chooser-body">
        <ArrowButton onClick={moveheadleft} direction="left"></ArrowButton>
        <div>
          <div>{selectedHead.name}</div>
          <img
            className="chooserimagehead"
            src={selectedHead.url}
            alt={selectedHead.name}
          />
          
        </div>
        <ArrowButton onClick={moveheadright} direction="right"></ArrowButton>
      </div>
      <div className="chooser-body">
        <ArrowButton onClick={movebodyleft} direction="left"></ArrowButton>
        <div>
          <div>{selectedBody.name}</div>
        <img
            className="chooserimagebody"
            src={selectedBody.url}
            alt={selectedBody.name}
          />
        </div>
        <ArrowButton onClick={movebodyright} direction="right"></ArrowButton>
      </div>
      <div className="chooser-body">
        <ArrowButton onClick={movelegleft} direction="left"></ArrowButton>
        <div>
          <div>{selectedLegs.name}</div>
         <img
            className="chooserimagelegs"
            src={selectedLegs.url}
            alt={selectedLegs.name}
          />
        </div>
        <ArrowButton onClick={movelegright} direction="right"></ArrowButton>
      </div>
    </div>
  );
}

export { Chooser };
