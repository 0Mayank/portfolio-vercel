import '../styles/globals.css'
import Layout from '../components/Layout'
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <AnimatedCursor
        innerSize={5}
        outerSize={30}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.5}
        trailingSpeed={5.5}>
      </AnimatedCursor>
      
    </Layout>
  )
}

export default MyApp
