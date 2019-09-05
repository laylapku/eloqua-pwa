// react
import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useRef
} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext.js";
import {
  PLAY_PAUSE,
  ON_NEXT,
  ON_DURATION,
  UPDATE_PLAYED
} from "../reducers/constants";

// libs
import ReactPlayer from "react-player";

// components
import Explore from "./Explore";
import Favorites from "./Favorites";
import Settings from "./Settings";
import PlayList from "./PlayList";
import Text from "./Text";
import BottomView from "./BottomView";

// data
import speeches from "../data/speeches";
//import speakers from "../data/speakers.js";

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
  const { player, dispatch } = useContext(PlayerContext);
  const {
    playing,
    played,
    loop,
    playbackRate,
    //duration,
    playlist,
    index
  } = player;
  const [url, setUrl] = useState(
    speeches.find(ele => ele.id === playlist[index]).url
  );
  const [seeking, setSeeking] = useState(false);
  const playerRef = useRef(null);

  // workaround for react-player onProgress compatible issue with react hooks
  const seekingRef = useRef(null);
  useEffect(() => {
    seekingRef.current = seeking;
  }, [seeking]);
  // check out this react-player issue: https://github.com/CookPete/react-player/issues/511
  // and more importantly this react issue: https://github.com/facebook/react/issues/14031
  // also react documentation: https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback

  //get new url when component updates
  useEffect(() => {
    const speechToPlay = speeches.find(ele => ele.id === playlist[index]);
    setUrl(speechToPlay.url);
    //updateMetadata();
  }, [playlist, index]);

  // seek methods for player slider
  const onSeekEnd = (e, value) => {
    playerRef.current.seekTo(parseFloat(value / 100)); //ref fix
    setSeeking(false);
  };

  const onSliderClick = (e, value) => {
    setSeeking(true);
    dispatch({ type: "UPDATE_PLAYED", payload: parseFloat(value / 100) });
  };

  return (
    <Fragment>
      <ReactPlayer
        ref={playerRef} // for seekTo method
        height="0px" // required
        url={url}
        playing={playing}
        played={played}
        loop={loop}
        playbackRate={playbackRate}
        onEnded={() => dispatch({ type: ON_NEXT })}
        onDuration={payload => dispatch({ type: ON_DURATION, payload })} // updates audio duration
        onProgress={status =>
          !seekingRef.current &&
          dispatch({ type: UPDATE_PLAYED, payload: status.played })
        } // update ui values with values from player
      />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route path="/playlist" component={PlayList} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/settings" component={Settings} />
          <Route
            path="/text"
            render={() => (
              <Text
                played={played}
                onSeekEnd={onSeekEnd}
                onSliderClick={onSliderClick}
              />
            )}
          />
        </Switch>

        <BottomView />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
