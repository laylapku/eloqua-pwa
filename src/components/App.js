// react
import React from "react";

//material ui
import { ThemeProvider } from "@material-ui/styles";

// components
import Routes from "./Routes";

//theme
import defaultColorTheme from "../styles/defaultColorTheme";

/* class App extends Component {
   constructor(props) {
    super(props);

    if ("mediaSession" in navigator) {
      this.updateMetadata();
      navigator.mediaSession.setActionHandler("play", () => {
        this.props.playPause();
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        this.props.playPause();
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        this.props.onPrev();
        this.updateMetadata();
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        this.props.onNext();
        this.updateMetadata();
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        this.seekBackward();
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        this.seekForward();
      });
    }
  }
  updateMetadata = () => {
    let speech = speeches.find(
      ele => ele.id === this.props.playlist[this.props.index]
    );
    let speaker = speakers[speech.speakerId].name;
    let avatar = speakers[speech.speakerId].img;
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: speech.title,
        artist: speaker,
        artwork: [
          { src: avatar, sizes: "96x96", type: "image/png" },
          { src: avatar, sizes: "128x128", type: "image/png" },
          { src: avatar, sizes: "192x192", type: "image/png" },
          { src: avatar, sizes: "256x256", type: "image/png" },
          { src: avatar, sizes: "384x384", type: "image/png" },
          { src: avatar, sizes: "512x512", type: "image/png" }
        ]
      });
    }
  };
  // seek methods for media session
  seekBackward = () => {
    let skipTime = 0.05;
    let played = Math.max(this.props.played - skipTime, 0);
    this.props.updatePlayed(played);
    this.player.seekTo(played);
  };
  seekForward = () => {
    let skipTime = 0.05;
    let played = Math.min(this.props.played + skipTime, this.props.duration);
    this.props.updatePlayed(played);
    this.player.seekTo(played);
  }; 
  render() {
    return null;
  }
} */

const App = () => {
  return (
    <ThemeProvider theme={defaultColorTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
