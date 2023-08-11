import { Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import MovieSliderContainer from "./components/MovieSliderContainer"
import TrendingSliderContainer from "./components/TrendingSliderContainer"


function App() {

  return (
    <>
        <NavBar />
        <Text>Billboard</Text>
        <TrendingSliderContainer />
        <MovieSliderContainer />
        <Text>Footer</Text>
    </>
  )
}

export default App
