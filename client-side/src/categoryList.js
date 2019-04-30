import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CategoryCard from './categoryCard';
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class CategoryList extends React.Component {

  render() {
    const { classes } = this.props;
    let category = [{
      title : 'none',
      createdBy : 'none'
    }];
    
    if(this.props.category){
      category = this.props.category;
    }
    console.log('this is down set', this.props.category);
    return (
      <div className={classes.root}>
        <div className={classes.demo}>
          <List dense={true}>
            {category.map(value=>(
              <ListItem >
                <CategoryCard title={value.title} createdBy={value.createdBy} id={value._id}/>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CategoryList);
