import DefaultLayout from '../components/DefaultLayout'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
