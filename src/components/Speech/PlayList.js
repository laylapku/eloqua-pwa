import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import BottomBar from "../BottomBar.js";
import speakers from "../../data/speakers";
import {
  handlePlaylistItemClick,
  deleteFromPlaylist,
  deleteAllFromPlaylist,
  toggleAddToFavlist
} from "../../redux/actions.js";

const mapStateToProps = state => {
  return {
    playlist: state.playlist,
    index: state.index,
    favlist: state.favlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePlaylistItemClick: index => dispatch(handlePlaylistItemClick(index)),
    deleteFromPlaylist: index => dispatch(deleteFromPlaylist(index)),
    deleteAllFromPlaylist: () => dispatch(deleteAllFromPlaylist()),
    toggleAddToFavlist: id => dispatch(toggleAddToFavlist(id))
  };
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    boxShadow: "none",
    background: "inherit"
  },
  header: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto 12% 8%"
  },
  list: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "8% auto repeat(2, 10%)"
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#EDEAE0",
      borderRadius: "3px",
      padding: "5px 10px",
      easeInOut: "all 1s"
      /* "@media(hover:none)": {
        backgroundColor: "red"
      } */
    }
  }
});

const PlayList = props => {
  const {
    classes,
    playlist,
    handlePlaylistItemClick,
    deleteFromPlaylist,
    deleteAllFromPlaylist,
    favlist,
    toggleAddToFavlist
  } = props;
  const favCheck = playlist.every(item => favlist.indexOf(item.id) > -1);
  const ids = playlist.map(item => item.id);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.header}>
          <h3>Your PlayList</h3>
          <IconButton>
            {playlist.length > 0 && favCheck === true ? (
              <FavoriteIcon onClick={() => toggleAddToFavlist(ids)} />
            ) : (
              <FavoriteBorderIcon onClick={() => toggleAddToFavlist(ids)} />
            )}
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={deleteAllFromPlaylist} />
          </IconButton>
        </div>

        {playlist.map((item, index) => {
          const speaker = speakers[item.speakerId].name;

          return (
            <div className={classes.list} key={index}>
              {index === props.index ? (
                <IconButton>
                  <PlayArrowIcon />
                </IconButton>
              ) : (
                <p />
              )}
              <ListItem
                button
                onClick={() => handlePlaylistItemClick(index)}
                classes={{ button: classes.listItem }}
              >
                <ListItemText primary={item.title + " - " + speaker} />
              </ListItem>
              <IconButton onClick={() => toggleAddToFavlist([item.id])}>
                {favlist.indexOf(item.id) !== -1 ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={() => deleteFromPlaylist(index)} />
              </IconButton>
            </div>
          );
        })}
      </div>
      <BottomBar />
    </React.Fragment>
  );
};

{
  /* <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    {index === props.index ? (
                      <IconButton>
                        <PlayArrowIcon />
                      </IconButton>
                    ) : (
                      <p />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    onClick={() => handlePlaylistItemClick(index)}
                    primary={item.title + " - " + speaker}
                    classes={{ root: classes.text }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => toggleAddToFavlist([item.id])}>
                      {favlist.indexOf(item.id) !== -1 ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                    <IconButton>
                      <DeleteIcon onClick={() => deleteFromPlaylist(index)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid> */
}

PlayList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayList)
);
