import React from "react";

function Header() {

  const headerStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '30vh',
    backgroundColor: '#7FBC76',
    width: '100%',
    color: '#f5f5f5'
  }


  return (
    <div className="header">
      <h1>Tap Room Inventory</h1>
    </div>

    
  );
}

class MyCoolWebsite extends React.Component {
  render() {
    return (
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0
        }}
      >
        <source src="./public/video.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default Header; 