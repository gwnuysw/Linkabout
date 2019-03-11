import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { spacing } from '@material-ui/system';
import CategoryTab from './categoryTab';
import LinkList from './linkList';
import { Route, Link } from 'react-router-dom';
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
  state = {
    categoryId : '5c7e008874f7270f3190499e',
  };
  changeCategory(){

    fetch('http://localhost/set/'+setId)
    .then(response=>response.json())
    .then((data)=>{
      this.setState({...data, ajaxed : true});
      console.log('this is ajax result', this.state);
    })
  };
  componentDidMount() {
    if(this.props.match.url == "/"){
      fetch('http://localhost/set/'+this.state.categoryId)
      .then(response=>response.json())
      .then((data)=>{
        this.setState({...data, ajaxed : true});
        console.log('this is ajax result', this.state);
      })
    }
    console.log('check url', this.props.match.url);
  };
  render () {
    const { classes } = this.props;
    console.log('container classes', classes);
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <CategoryTab informOfSet={this.state} change={this.changeCategory} width = '100%'/>
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
