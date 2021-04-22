import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Loader from './components/Loader/Loader';
import YouTube from "react-youtube";

import "./App.css";

function App() {
  const links = {
    "Sao Paulo": "WcjGyIjHLDA",
    "New York": "MeZ8P73JNtw",
  };
  const cities = ["Sao Paulo", "New York"];
  const [selectedCity, setSelectedCity] = useState(cities[1]);
  const [isNoiseMuted, setIsNoiseMuted] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(true)

  const speed = 0.5;
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      fs: 0,
      disableKeyboard: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 0,
      rel: 0,
      mute: 1,
    },
  };

  const _onPlay = () => {
    setTimeout(() => {
      console.log("here");
      setOverlayVisible(false);
    }, 3100)
  }

  const _onEnd = () => {
    let nextCityIndex = cities.findIndex(city => city === selectedCity) + 1
    if (nextCityIndex > cities.length) {
      nextCityIndex = 0;
    }
    setSelectedCity(cities[nextCityIndex])
  }


  return (
    <div className="App">
      <YouTube
        id="yt-player"
        videoId={links[selectedCity]}
        opts={opts}
        // onReady={_onReady}
        onPlay={_onPlay}
        onEnd={_onEnd}
        onPlaybackRateChange={() => { }}
      />
      <ReactAudioPlayer
        src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
        autoPlay
        controls
        muted={isNoiseMuted}
      />
      <select
        style={{ position: "absolute", top: 10 }}
        value={selectedCity}
        name="city"
        onChange={(event) => {
          setOverlayVisible(true);
          setSelectedCity(event.target.value);
        }}
      >
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <button
        style={{ position: "absolute", top: 10, right: 270 }}
        onClick={() => setIsNoiseMuted(!isNoiseMuted)}
      >
        Mute Radio
        </button>
      {isOverlayVisible && (<Loader />)}
    </div>
  );
}

export default App;
