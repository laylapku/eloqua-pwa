/* import React from 'react';

const Nav = ({ onRouteChange }) => {
    return ( 
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('home')}>Home</p>
        </nav>
    );
}

export default Nav; */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MicIcon from '@material-ui/icons/Mic';

const styles = {
  wrapper: {
    width: '100%'
  },
};

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
        <Tabs
          className={classes.wrapper}
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<PersonPinIcon />} label="Account" />  
          <Tab icon={<SearchIcon />} label="Explore" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
          <Tab icon={<MicIcon />} label="Player" />
        </Tabs>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);

