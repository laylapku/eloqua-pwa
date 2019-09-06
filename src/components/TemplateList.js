//react
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import {
  PLAY_PAUSE,
  ADD_TO_PLAYLIST,
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "../reducers/constants";

//material ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DeleteIcon from "@material-ui/icons/Delete";

//data
import speeches from "../data/speeches";
import speakers from "../data/speakers";

//styles
import useStyles from "../styles/customizedStyles";

const TemplateList = props => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, index, playlist, favlist } = player;
  const classes = useStyles();

  const {
    //props passed by parent components
    id,
    speechIndex,
    noPlay,
    location: { pathname }
  } = props;

  const speechDisplayed = speeches.find(item => item.id === id);
  const year = speechDisplayed.date.split(" ")[2]; //"27 October 1964" -> "1964"
  const speakerName = speakers[speechDisplayed.speakerId].name;
  const speechPlaying = speeches.find(item => item.id === playlist[index]);
  const stylesOnPlay = id => ({
    color: speechPlaying.id === id ? "#CC5500" : "#1B1811"
  });

  return (
    <List className={classes.listGrid}>
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
              {speechDisplayed.title + "(" + year + ")"}
              <br />
              <em className="speaker-name">{speakerName}</em>
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
  );
};

export default withRouter(TemplateList);
