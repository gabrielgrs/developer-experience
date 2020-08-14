/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function SEO({ description, lang, title }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: `website` },
      ]}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SEO
