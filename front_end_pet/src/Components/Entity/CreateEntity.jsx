import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const CreateEntity = () => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    address: "",
    capacity: "",
    costperday: "",
    verified: "",
    rating: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    console.log("form: ", form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/entities", form).then(() => {
      alert(`${form.name} added`);
      setForm({
        name: "",
        city: "",
        address: "",
        capacity: "",
        costperday: "",
        verified: "",
        rating: "",
        imageUrl: "",
      });
    });
  };

  return (
    <>
      <h2>Create Your Entity</h2>

      <Card style={{ maxWidth: 400, margin: "0 auto" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={24} sm={12} item>
                <TextField
                  label="Name"
                  value={form.name}
                  placeholder="Enter your pet name"
                  fullWidth
                  onChange={handleChange}
                  id="name"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  label="City"
                  value={form.city}
                  placeholder="Enter your City"
                  onChange={handleChange}
                  fullWidth
                  id="city"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  label="Address"
                  value={form.address}
                  placeholder="Enter your Address"
                  onChange={handleChange}
                  fullWidth
                  id="address"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  type="number"
                  label="Capacity"
                  value={form.capacity}
                  placeholder="Enter Capacity"
                  onChange={handleChange}
                  fullWidth
                  id="capacity"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  type="number"
                  label="Cost Per Day"
                  value={form.costperday}
                  placeholder="Enter Cost/Day"
                  onChange={handleChange}
                  fullWidth
                  id="costperday"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  label="Verified"
                  value={form.verified}
                  placeholder="Verified"
                  fullWidth
                  onChange={handleChange}
                  id="verified"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  type="number"
                  label="Rating"
                  value={form.rating}
                  placeholder="Rating"
                  onChange={handleChange}
                  fullWidth
                  id="rating"
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  type="url"
                  label="Image Url"
                  value={form.imageUrl}
                  placeholder="Enter Image"
                  onChange={handleChange}
                  fullWidth
                  id="imageUrl"
                />
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{ margin: "5px 10px", padding: "12px 146px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
