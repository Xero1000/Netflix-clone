import { useParams } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import getFirstTrailer from "../utilities/getFirstTrailer";
import { Spinner, Text } from "@chakra-ui/react";
import styles from "../css-modules/trailer.module.css";

const TrailerPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useVideos(params.contentType!, parseInt(params.id!));

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  const trailer = getFirstTrailer(data?.results);

  return (
    <iframe
      className={styles.trailer}
      src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1`}
      allowFullScreen
    ></iframe>
  );
};

export default TrailerPage;