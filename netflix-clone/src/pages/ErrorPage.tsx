import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>Sorry</Heading>
        <Text>
            {isRouteErrorResponse(error)
            ? "The page you requested does not exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
