import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { spacing } from '@material-ui/system';
import CategoryTab from './categoryTab';
import LinkList from './linkList';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
});
class colContainer extends React.Component {

  componentDidMount(){
      console.log('this is doesn\'t work');
  }
  render () {
    const { classes } = this.props;
    console.log('this is doesn\'t work');  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <CategoryTab informOfSet={this.props.informOfSet} width = '100%'/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <LinkList />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

colContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(colContainer);
