import "./character-body.css";

function CharacterBody({ selectedHead, selectedBody, selectedLegs }) {
  return (
    <div className="character-container">
      <img
        className="character-head"
        src={selectedHead.url}
        alt={selectedHead.name}
        style={{
          height: selectedHead.height,
          width: selectedHead.width,
          zIndex: selectedHead.z,
          top: selectedHead.top,
          left: selectedHead.left,
        }}
      />
      <img
        className="character-body"
        src={selectedBody.url}
        alt={selectedBody.name}
        style={{
          height: selectedBody.height,
          width: selectedBody.width,
          zIndex: selectedBody.z,
          top: selectedBody.top,
          left: selectedBody.left,
        }}
      />
      <img
        className="character-legs"
        src={selectedLegs.url}
        alt={selectedLegs.name}
        style={{
          height: selectedLegs.height,
          width: selectedLegs.width,
          zIndex: selectedLegs.z,
          top: selectedLegs.top,
          left: selectedLegs.left,
        }}
      />
    </div>
  );
}

export { CharacterBody };
