import { Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import TrendingSliderContainer from "./components/TrendingSliderContainer"
import GenreSliderContainer from "./components/GenreSliderContainer"
import Banner from "./components/Banner"

function App() {

  return (
    <>
        <NavBar />
        <Banner />
        <TrendingSliderContainer />
        <GenreSliderContainer />
        <Text>Footer</Text>
    </>
  )
}

export default App
