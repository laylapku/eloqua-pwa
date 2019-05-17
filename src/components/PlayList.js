import React from "react";

import { connect } from "react-redux";

import TemplateList from "./TemplateList.js";

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  };
};

const PlayList = props => {
  const { playlist } = props;

  return (
    <div className="page-container">
      {playlist.map((ele, index) => {
        return (
          <TemplateList
            key={"playListSpeech-" + index}
            id={ele}
            speechIndex={index}
          />
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps)(PlayList);

/* {playlist.map((ele, index) => {
        const speech = speeches.find(item => item.id === ele);
        const year = speech.date.split(" ")[2]; // "27 October 1964" -> "1964"
        const speakerName = speakers[speech.speakerId].name;

        const stylesOnPlay = index => ({
          color: index === props.index ? "#CC5500" : "#1B1811"
        });

        return (
          <div className={classes.listItem} key={"playListSpeech-" + index}>
            {index === props.index ? (
              <IconButton>
                <PlayArrowIcon style={stylesOnPlay(index)} />
              </IconButton>
            ) : (
              <p />
            )}

            <ListItem button onClick={() => addToPlaylist({ id: ele })}>
              <ListItemText
                primary={
                  <Typography style={stylesOnPlay(index)}>
                    {speech.title + "(" + year + ")"}
                    <br />
                    <em className="speaker">{speakerName}</em>
                  </Typography>
                }
              />
            </ListItem>
            <IconButton onClick={() => toggleAddToFavlist([ele])}>
              {favlist.indexOf(ele) !== -1 ? (
                <FavoriteIcon classes={{ root: classes.favIcon }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <IconButton onClick={() => deleteFromPlaylist(index)}>
              <DeleteIcon classes={{ root: classes.deleteIcon }} />
            </IconButton>
          </div>
        );
      })}

    <BottomBar /> */
