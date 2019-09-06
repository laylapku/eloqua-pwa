//react
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../contexts/PlayerContext";
import {
  DELETE_FROM_PLAYLIST,
  TOGGLE_ADD_TO_FAVLIST
} from "../reducers/constants";

//material ui
import { AppBar, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";

//styles
import useStyles from "../styles/customizedStyles";

const TemplateTopbar = props => {
  const { player, dispatch } = useContext(PlayerContext);
  const { playlist, favlist } = player;
  const classes = useStyles();

  const {
    //props passed by parent components
    location: { pathname }
  } = props;

  const favCheck = playlist.every(ele => favlist.indexOf(ele) !== -1);

  return (
    <AppBar classes={{ root: classes.appBar }}>
      {pathname === "/playlist" ? (
        <div className={classes.appBarInner}>
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
      ) : (
        <h3 className={classes.appBarInner}>My Library</h3>
      )}
    </AppBar>
  );
};

export default withRouter(TemplateTopbar);
