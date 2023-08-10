import { Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import useGenres from "./hooks/useGenres"
import SliderContainer from "./components/SliderContainer"


function App() {
  const { data } = useGenres()
  console.log(data?.genres)
  return (
    <>
        <NavBar />
        <Text>Billboard</Text>
        <SliderContainer />
        <Text>Footer</Text>
    </>
  )
}

export default App
