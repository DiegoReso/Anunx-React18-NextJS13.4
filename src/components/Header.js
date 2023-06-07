import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Container, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';


export default function ButtonAppBar() {



  const [anchorUserMenu,setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    
      <AppBar position="static" elevation={3}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="secondary" variant="outlined">ANUNCIAR E VENDER</Button>
            </Link>
            <IconButton 
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
              color='secondary'>

              {

                true === false
                  ? <Avatar src=""/>
                  : <AccountCircle/>

              }
              <Typography sx={{ml:'10px'}} variant="subtitle2" color="secondary">
                Diego Reis
              </Typography>

            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              sx={{mt: '12px'}}
              color='primary'
            >
              <Link href='user/dashboard' passHref>
                <MenuItem>
                  <Typography color="primary">
                    Meus anúncios
                  </Typography>
                </MenuItem>
              </Link>
              <Link href='user/publish' passHref>
                <MenuItem>
                <Typography color="primary">
                    Publicar anúncio
                  </Typography>
                </MenuItem>
              </Link>
              <Divider/>
              <MenuItem>Sair</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
   
  );
}
