import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Service from "../service/service";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    card: {
        height: 450,
        width:450,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 450,
        width: 450,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class TrendMainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            spacing: '16',

        };
        this.loadPrediction();
    }

    loadPrediction = () => {
        Service.loadData((data) => {
            this.setState({

                data: data,

            })
        })
    };


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} justify="center" spacing={Number(this.state.spacing)}>
                            {this.state.data.map(record => (
                                <Grid key={record} item>
                                    <Paper className={classes.paper}>

                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.media}
                                                image={record.image_url}
                                                title={record.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="headline" component="h4">
                                                    {record.name}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Amazon {record.amazon_rate}
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Real {record.rate}
                                                </Button>
                                                <Button size="small" color="primary">
                                                    <a href={record.url}>Link</a>
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Paper>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TrendMainComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(TrendMainComponent);
