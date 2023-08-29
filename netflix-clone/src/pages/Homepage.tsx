import { Box } from "@chakra-ui/react"
import Banner from "../components/Banner"
import GenreSliderContainer from "../components/GenreSliderContainer"
import TrendingSliderContainer from "../components/TrendingSliderContainer"

const Homepage = () => {
  return (
    <>
        <Banner />
        <Box overflow="hidden">
          <TrendingSliderContainer />
          <GenreSliderContainer />
        </Box>
    </>
  )
}

export default Homepage