import React, { Component } from "react";
import ReactPlayer from "react-player";
import Duration from "./Duration";

class SoundPlayer extends Component {
  state = {
    url: null,
    playing: false,
    playbackRate: 1.0,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    loop: false
  };

  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  stop = () => {
    this.setState({ url: null, playing: false });
  };

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  onPlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  onSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  onDuration = duration => {
    this.setState({ duration });
  };

  // controls display of values of seek and loaded
  onProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const {
      playing,
      volume,
      muted,
      duration,
      loop,
      played,
      loaded,
      playbackRate
    } = this.state;
    return (
      <div className="app">
        <div className="player-wrapper">
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            width="100%"
            height="100%"
            url={this.props.url}
            playing={playing}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            loop={loop}
            onReady={() => console.log("onReady")}
            onStart={() => console.log("onStart")}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onBuffer={() => console.log("onBuffer")}
            onSeek={e => console.log("onSeek", e)}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            onEnded={this.onEnded}
            onError={e => console.log("onError", e)}
          />
        </div>

        <div>
          <button onClick={this.playPause}>{playing ? "Pause" : "Play"}</button>
          <button onClick={this.toggleLoop}>Loop</button>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
          <progress max={1} value={loaded} />
          <Duration seconds={duration * played} /> /{" "}
          <Duration seconds={duration} />
          <button onClick={this.setPlaybackRate} value={1}>
            1x
          </button>
          <button onClick={this.setPlaybackRate} value={1.5}>
            1.5x
          </button>
          <button onClick={this.setPlaybackRate} value={2}>
            2x
          </button>
          <button onClick={this.toggleMuted}>Mute</button>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={this.setVolume}
          />
        </div>
      </div>
    );
  }
}

export default SoundPlayer;
