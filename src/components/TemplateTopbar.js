//react
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import {
  deleteFromPlaylist,
  toggleAddToFavlist
} from "../reducers/playerActions";

//material ui
import { AppBar, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";

//styles
import useStyles from "../styles/customizedStyles";

const TemplateTopbar = ({ location: { pathname } }) => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playlist, favlist } = player;
  const classes = useStyles();
  const favCheck = playlist.every(ele => favlist.indexOf(ele) !== -1);

  return (
    <AppBar classes={{ root: classes.appBar }}>
      {pathname === "/playlist" ? (
        <div className={classes.appBarInner}>
          <h3>My Playlist</h3>
          <IconButton onClick={() => dispatch(toggleAddToFavlist(playlist))}>
            {favCheck ? (
              <FavoriteIcon classes={{ root: classes.favIcon }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton onClick={() => dispatch(deleteFromPlaylist("all"))}>
            <DeleteIcon />
          </IconButton>
        </div>
      ) : (
        <h3 className={classes.appBarInner}>My Library</h3>
      )}
    </AppBar>
  );
};

export default withRouter(TemplateTopbar);
