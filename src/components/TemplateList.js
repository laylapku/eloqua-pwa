//react
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/player/player.context";
import {
  playPause,
  addToPlaylist,
  deleteFromPlaylist,
  toggleAddToFavlist
} from "../contexts/player/player.actions";

//material ui
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton
} from "@material-ui/core";
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
    location: { pathname },
    //props passed by parent components
    id,
    speechIndex,
    noPlay
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
          onClick={() => dispatch(playPause())}
          style={stylesOnPlay(id)}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      ) : (
        <p />
      )}
      <ListItem button onClick={() => dispatch(addToPlaylist({ id }))}>
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
      <IconButton onClick={() => dispatch(toggleAddToFavlist([id]))}>
        {favlist.indexOf(id) !== -1 ? (
          <FavoriteIcon classes={{ root: classes.favIcon }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
      {pathname === "/playlist" ? (
        <IconButton onClick={() => dispatch(deleteFromPlaylist(speechIndex))}>
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => dispatch(addToPlaylist({ id, noPlay }))} //just add to playlist, don't play
        >
          <PlaylistAddIcon />
        </IconButton>
      )}
    </List>
  );
};

export default withRouter(TemplateList);
