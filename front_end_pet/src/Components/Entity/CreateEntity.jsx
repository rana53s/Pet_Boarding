import { Box, Button, Card, CardContent, Grid, TextField } from "@mui/material";

export const CreateEntity = () => {
  return (
    <>
      <h2>Create Your Entity</h2>

      <Card style={{maxWidth:400, margin: '0 auto'}} >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={24} sm={12} item>
                <TextField
                  label="Name"
                  placeholder="Enter your pet name"
                  fullwidth
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  label="City"
                  placeholder="Enter your City"
                  fullwidth
                />
              </Grid>
              <Grid xs={24} sm={12}item>
                <TextField
                  label="Address"
                  placeholder="Enter your Address"
                  fullwidth
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  type="number"
                  label="Capacity"
                  placeholder="Enter Capacity"
                  fullwidth
                />
              </Grid>
              <Grid xs={24} sm={12} item>
                <TextField
                  type="number"
                  label="Cost Per Day"
                  placeholder="Enter Cost/Day"
                  fullwidth
                />
              </Grid>
              <Grid xs={24} sm={12}item>
                <TextField label="Varified" placeholder="Varified" fullwidth />
              </Grid>
              <Grid xxs={24} sm={12}item>
                <TextField
                  type="number"
                  label="Rating"
                  placeholder="Rating"
                  fullwidth
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth style={{margin: '5px 96px', padding: '10px 20px'}}>
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
