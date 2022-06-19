import Head from 'next/head'
import PropTypes from 'prop-types'
import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Boilerplate - NextJS</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.object,
  pageProps: PropTypes.object
}

export default MyApp
