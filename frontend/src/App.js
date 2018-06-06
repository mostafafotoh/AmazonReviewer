import React, {Component} from 'react';
import './App.css';
import MainContainer from './components/main/main.container'
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {withStyles} from "@material-ui/core/styles/index";
import {createMuiTheme} from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';

const history = createBrowserHistory();
const theme = (() => {
    const palette = createPalette({
        type: 'dark',
    });

    const typography = createTypography(palette, {
        fontFamily: "Song Myung, serif",
    });

    return createMuiTheme({
        palette: palette,
        typography: typography,
    });
})();


class App extends Component {
    render() {
        return (
            <Router history={history}>

                <div className="App">
                    <MainContainer/>
                </div>
            </Router>
        );
    }
}

export default withStyles(theme, {withTheme: true})(App);
