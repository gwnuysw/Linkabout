import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class CategoryCard extends React.Component {
  render(){
    const { classes } = this.props;
    let title = 'none';
    let createdBy = 'none';
    let id='5c7e008874f7270f3190499e';
    if(this.props.title){
      title = this.props.title;
      createdBy = this.props.createdBy;
      id = "/set/"+this.props.id;
      this.setState({

      })
    }
    console.log('check string', this.props);
    return (
          <Card className={classes.card} >
            <CardActions>
              <Button tag="a" href={id} onclick=>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {createdBy}
                  </Typography>
                </CardContent>
              </Button>
            </CardActions>
          </Card>
    );
  }
}

CategoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryCard);
