import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BOS SITE
          </Typography>

          <Stack direction='row' spacing={2} >
            <Button><Link to="/">Home</Link></Button>
            <Button><Link to="/listing/create">Add Entity</Link></Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
