import { Text } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import Slider from "./components/Slider"
import useGenres from "./hooks/useGenres"


function App() {
  const { data } = useGenres()
  console.log(data?.genres)
  return (
    <>
        <NavBar />
        <Text>Billboard</Text>
        <Slider />
        <Text>Footer</Text>
    </>
  )
}

export default App
