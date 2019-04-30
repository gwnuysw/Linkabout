import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CategoryList from './categoryList';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class categoryTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    let title = "Category Title"
    let createdBy = "Category Owner";
    let downset = {};
    if(this.props.informOfSet){
      title = this.props.informOfSet.curset[0].title;
      createdBy = this.props.informOfSet.curset[0].createdBy;
      downset = this.props.informOfSet.downset;
    }
    console.log('this is curset', this.props);
    return (
      <div className={classes.root}>
        <Typography variant="h5" component="h2"  gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">
          {createdBy}
        </Typography>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Up" />
            <Tab label="Down" />
          </Tabs>
        </AppBar>
        {value === 0 &&
          <TabContainer>
            <CategoryList />
          </TabContainer>}
        {value === 1 &&
          <TabContainer>
            <CategoryList downCategory={downset}/>
          </TabContainer>}
      </div>
    );
  }
}

categoryTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(categoryTab);
