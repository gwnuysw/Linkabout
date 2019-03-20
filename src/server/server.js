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
module.exports = function render(inform) {
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
  class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
    render() {
      return(
        <StaticRouter location="/set/:categoryid" context={context}>
          <Root />
        </StaticRouter>
      );
    }
  }
  // Create a new class name generator.
  const generateClassName = createGenerateClassName();
  // Render the component to a string.
  const context = {};
  const html = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
      {/*여기 에서 로케이션은 정적파일을 배포하는 디렉터리를 나타내는듯 하다 즉 여기서는 assets!*/}
        <Main />
      </MuiThemeProvider>
    </JssProvider>,
  );
  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString();
  const page = renderFullPage(html, css);
  return page;
}
