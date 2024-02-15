import "@/styles/globals.css"
import '../styles/globals.css'

 function App({ Component, pageProps }) {
  return(
    <layout>
      <Component {...pageProps}/>
    </layout>
  )
}
export default App