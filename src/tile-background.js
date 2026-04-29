import './tile-background.css';

function TileBackground() {
  return (
    <div className="app-background-sprites">
      <img
        src="/tiles/tile_r06_c07.png"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% - 300px)',
        }}
      />
      <img
        src="/tiles/tile_r08_c00.png"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% - 360px)',
        }}
      />
      <img
        src="/tiles/object_sunflower.png"
        style={{
          position: 'absolute',
          top: 'calc(50% - 130px)',
          right: 'calc(50% - 300px)',
        }}
      />
      <img
        src="/tiles/tile_r00_c04.png"
        style={{
          position: 'absolute',
          top: '50%',
          right: 'calc(50% - 380px)',
        }}
      />
    </div>
  );
}

export { TileBackground };