//react
import React, { Fragment, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import {
  PLAY_PAUSE,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "../reducers/constants";

//material ui
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";

//data
import speeches from "../data/speeches";
import speakers from "../data/speakers";

const styles = () => ({
  appBar: {
    background: "linear-gradient(to bottom, #ddd 0%, #EDEAE0 100%)",
    color: "inherit",
    height: "48px",
    boxShadow: "0 0 5px #d2d4dc"
  },
  header: {
    display: "grid",
    gridTemplateColumns: "auto 12% 8%",
    alignItems: "center",
    padding: "0 15px"
  },
  list: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "5% auto repeat(2, 10%)",
    boxShadow: "2px 2px 5px RGB(192, 178, 131, 0.5)",
    padding: 0
  },
  listItemText: {
    padding: 0
  },
  deleteIcon: {
    fill: "RGB(132,132,130)"
  },
  favIcon: {
    fill: "RGB(206,32,41, 0.8)"
  }
});

const TemplateList = props => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, index, playlist, favlist } = player;

  const {
    classes,
    //props passed by parent components
    id,
    speechIndex,
    noPlay,
    location: { pathname }
  } = props;
  const favCheck = playlist.every(ele => favlist.indexOf(ele) !== -1);
  const speechShown = speeches.find(item => item.id === id);
  const year = speechShown.date.split(" ")[2]; //"27 October 1964" -> "1964"
  const speakerName = speakers[speechShown.speakerId].name;
  const speechPlaying = speeches.find(item => item.id === playlist[index]);
  const stylesOnPlay = id => ({
    color: speechPlaying.id === id ? "#CC5500" : "#1B1811"
  });

  return (
    <Fragment>
      {pathname === "/playlist" && (
        <AppBar classes={{ root: classes.appBar }}>
          <div className={classes.header}>
            <h3>My Playlist</h3>
            <IconButton
              onClick={() =>
                dispatch({ type: TOGGLE_ADD_TO_FAVLIST, payload: playlist })
              }
            >
              {favCheck ? (
                <FavoriteIcon classes={{ root: classes.favIcon }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <IconButton
              onClick={() =>
                dispatch({ type: DELETE_FROM_PLAYLIST, payload: "all" })
              }
            >
              <DeleteIcon classes={{ root: classes.deleteIcon }} />
            </IconButton>
          </div>
        </AppBar>
      )}

      <List className={classes.list}>
        {id === speechPlaying.id ? (
          <IconButton
            onClick={() => {
              dispatch({ type: PLAY_PAUSE });
            }}
            style={stylesOnPlay(id)}
          >
            {playing ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        ) : (
          <p />
        )}
        <ListItem
          button
          onClick={() => {
            dispatch({ type: ADD_TO_PLAYLIST, payload: { id } });
          }}
        >
          <ListItemText
            primary={
              <Typography style={stylesOnPlay(id)}>
                {speechShown.title + "(" + year + ")"}
                <br />
                <em className="speaker">{speakerName}</em>
              </Typography>
            }
            classes={{ root: classes.listItemText }}
          />
        </ListItem>
        <IconButton
          onClick={() =>
            dispatch({
              type: TOGGLE_ADD_TO_FAVLIST,
              payload: [id]
            })
          }
        >
          {favlist.indexOf(id) !== -1 ? (
            <FavoriteIcon classes={{ root: classes.favIcon }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        {pathname === "/playlist" ? (
          <IconButton
            onClick={() =>
              dispatch({
                type: DELETE_FROM_PLAYLIST,
                payload: speechIndex
              })
            }
          >
            <DeleteIcon classes={{ root: classes.deleteIcon }} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() =>
              dispatch({ type: ADD_TO_PLAYLIST, payload: { id, noPlay } })
            } //just add to playlist, don't play
          >
            <PlaylistAddIcon />
          </IconButton>
        )}
      </List>
    </Fragment>
  );
};

export default withStyles(styles)(withRouter(TemplateList));
