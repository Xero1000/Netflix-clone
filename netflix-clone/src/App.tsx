import { Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import TrendingSliderContainer from "./components/TrendingSliderContainer"
import GenreSliderContainer from "./components/GenreSliderContainer"

function App() {

  return (
    <>
        <NavBar />
        <Text>Billboard</Text>
        <TrendingSliderContainer />
        <GenreSliderContainer />
        <Text>Footer</Text>
    </>
  )
}

export default App
