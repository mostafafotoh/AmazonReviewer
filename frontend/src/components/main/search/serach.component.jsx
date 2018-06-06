import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        marginTop: 200,
        marginLeft: 100,
        marginRight: 100,
        fontSize: 30,
        color: '#3F47BE'


    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },


});

class SearchMainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state.searchItem)
    };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <div>
                    <h1>Put The Link To The Item :D</h1>
                </div>
                <div>
                <form>
                        <TextField
                            id="searchItem"
                            name={"searchItem"}
                            fullWidth
                            autoFocus
                            value={this.state.searchItem}
                            onChange={this.handleChange}
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.bootstrapRoot,
                                    input: classes.bootstrapInput,
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.bootstrapFormLabel,
                            }}
                            margin="normal"
                        />
                    </form>
                </div>


            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(SearchMainComponent);
