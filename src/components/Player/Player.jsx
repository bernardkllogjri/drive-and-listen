import { useState } from "react";
import YouTube from "react-youtube";
import ReactAudioPlayer from "react-audio-player";
import Loader from '../Loader/Loader';
import PlayerService from './Player.service';
import './Player.css';

const Player = () => {
    const ps = new PlayerService();
    const [selectedCity, setSelectedCity] = useState(ps.cities[1]);
    const [isNoiseMuted, setIsNoiseMuted] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(true)

    ps.setData(setSelectedCity, setOverlayVisible, selectedCity)

    return (
        <>
            <div style={{
                width: 640,
                height: 360,
            }}>
                <YouTube
                    height="360"
                    width="640"
                    containerClassName="youtube-wrap"
                    id="yt-player"
                    videoId={ps.links[selectedCity]}
                    opts={ps.opts}
                    onPlay={() => ps.onPlay()}
                    onEnd={() => ps.onEnd()}
                    onPlaybackRateChange={() => { }}
                />
            </div>
            <ReactAudioPlayer
                style={{ display: 'none' }}
                src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
                autoPlay
                controls
                muted={isNoiseMuted}
            />
            <select
                style={{ position: "absolute", top: 10 }}
                value={selectedCity}
                name="city"
                onChange={(event) => ps.cityChanged(event)}
            >
                {ps.cities.map((city) => (
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
        </>
    );
}

export default Player;