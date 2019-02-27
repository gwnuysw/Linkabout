import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import Root from '../components/root';
import ReactDOMServer from 'react-dom/server';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import renderFullPage from '../Template';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { StaticRouter } from 'react-router-dom';
module.exports = function render() {
  // Model the initial state
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();
  // Create a sheetsManager instance.
  const sheetsManager = new Map();
  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    },
    typography: {
      useNextVariants: true,
    },
  });
  // Create a new class name generator.
  const generateClassName = createGenerateClassName();
  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <StaticRouter location="/">
          <Root />
        </StaticRouter>
      </MuiThemeProvider>
    </JssProvider>,
  );
  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString();
  const page = renderFullPage(html, css);
  return page;
}
