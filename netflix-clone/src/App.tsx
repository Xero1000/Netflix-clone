import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"


function App() {

  return (
    <>
      <Grid
        templateAreas={`"nav"
                        "billboard"
                        "sliders"
                        "footer"`}
        templateColumns={"1fr"}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="billboard">Billboard</GridItem>
        <GridItem area="sliders">Sliders</GridItem>
        <GridItem area="footer">Footer</GridItem>
      </Grid>
    </>
  )
}

export default App
