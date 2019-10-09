// react
import React, { useContext } from "react";
import { PlayerContext } from "../contexts/player/player.context";
import {
  deleteFromPlaylist,
  toggleAddToFavlist
} from "../contexts/player/player.actions";

// material ui
import { AppBar, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";

// styles
import useStyles from "../styles/customizedStyles";

const TemplateTopbar = ({ isPlaylist }) => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playlist, favlist } = player;
  const classes = useStyles();
  const favCheck = playlist.every(ele => favlist.indexOf(ele) !== -1);

  return (
    <AppBar className={classes.topBar}>
      {isPlaylist === true ? (
        <div className={classes.topBarInner}>
          <h3>My Playlist</h3>
          <IconButton onClick={() => dispatch(toggleAddToFavlist(playlist))}>
            {favCheck ? (
              <FavoriteIcon className={classes.favBtn} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton onClick={() => dispatch(deleteFromPlaylist("all"))}>
            <DeleteIcon />
          </IconButton>
        </div>
      ) : (
        <h3 className={classes.topBarInner}>My Library</h3>
      )}
    </AppBar>
  );
};

export default TemplateTopbar;
