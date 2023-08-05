import { Grid, GridItem } from "@chakra-ui/react"


function App() {

  return (
    <>
      <Grid
        templateAreas={`"nav"
                        "billboard"
                        "sliders"
                        "footer"`}
      >
        <GridItem area={"nav"}>NavBar</GridItem>
        <GridItem area={"billboard"}>Billboard</GridItem>
        <GridItem area={"sliders"}>Sliders</GridItem>
        <GridItem area={"footer"}>Footer</GridItem>
      </Grid>
    </>
  )
}

export default App
