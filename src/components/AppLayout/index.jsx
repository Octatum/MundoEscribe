import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components';

import './index.css'
import { globalTheme } from '../../utils/theme';
import { StaticQuery } from 'gatsby';

const AppLayout = ({ children, data }) => (
  <ThemeProvider theme={globalTheme}>
    <React.Fragment>
      <Helmet
        title="El mundo escribe"
        meta={[
          { name: 'description', content: 'El mundo escribe' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[{
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
          integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
          crossorigin: "anonymous"
        }]}
      />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

AppLayout.propTypes = {
  children: PropTypes.func,
}

export default AppLayout
