import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components';

import './index.css'
import { globalTheme } from './theme';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={globalTheme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
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
      {children()}
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
