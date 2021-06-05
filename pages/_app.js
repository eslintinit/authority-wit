import { ToastProvider } from '../context'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
