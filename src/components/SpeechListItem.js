// react
import React, { useContext } from "react";
import { PlayerContext } from "../contexts/player/player.context";
import {
  playPause,
  addToPlaylist,
  deleteFromPlaylist,
  toggleAddToFavlist
} from "../contexts/player/player.actions";
import { SpeechesContext } from "../contexts/speeches.context";

// material ui
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

// styles
import useStyles from "../styles/customizedStyles";

const SpeechListItem = ({
  speech: { id, title, date },
  speakerName,
  speechIndex,
  isPlaylist
}) => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playing, index, playlist, favlist } = player;
  const { speeches } = useContext(SpeechesContext);

  const speechOn = speeches && speeches[playlist[index]];
  const stylesOnPlay = id => ({
    color: speechOn && (speechOn.id === id ? "#CC5500" : "#1B1811")
  });

  const classes = useStyles();

  return (
    <List className={classes.listGrid}>
      {id === speechOn.id ? (
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
              {`${title} (${date.getFullYear()})`}
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
      {isPlaylist ? (
        <IconButton onClick={() => dispatch(deleteFromPlaylist(speechIndex))}>
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => dispatch(addToPlaylist({ id, noPlay: true }))} //just add to playlist, don't play
        >
          <PlaylistAddIcon />
        </IconButton>
      )}
    </List>
  );
};

export default SpeechListItem;
