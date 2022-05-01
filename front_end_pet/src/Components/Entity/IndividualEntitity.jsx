import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const IndividualEntity = () => {
  const { id } = useParams();
  const [entity, setEntity] = useState({
    name: "",
    city: "",
    address: "",
    capacity: "",
    costperday: "",
    verified: "",
    rating: "",
    imageUrl: "",
  });

  useEffect(() => getData(), [id]);

  const getData = () => {
    axios.get(`http://localhost:8080/entities/${id}`).then((res) => {
      setEntity(res.data);
      console.log(res.data);
    });
  };

  return (
    <>
      <h1>{entity.name}</h1>
      <Box width="720px" marginLeft="300px">
        <Card>
          <CardMedia
            component="img"
            height="360"
            image={entity.imageUrl}
            alt="bossite image"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {entity.city}
            </Typography>
            <Typography variant="h5">
              {entity.address}
            </Typography>
            <Typography variant="h6">Cost/day : {entity.costperday}</Typography>
            <Typography variant="h6">Capacity : {entity.capacity}</Typography>
            <Typography variant="h6">Verified: {entity.verified}</Typography>
            <Typography variant="h6">Rating : {entity.rating}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
