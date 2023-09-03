import { Box } from "@chakra-ui/react"
import Banner from "../components/Banner"
import GenreSliderContainer from "../components/GenreSliderContainer"
import TrendingSliderContainer from "../components/TrendingSliderContainer"

const Homepage = () => {
  return (
    <>
        <Banner />
        {/* Without overflow hidden, entire slider is viewable all at once */}
        <Box overflow="hidden">
          <TrendingSliderContainer />
          <GenreSliderContainer />
        </Box>
    </>
  )
}

export default Homepage