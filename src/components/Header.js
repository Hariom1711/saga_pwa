import React, { useSyncExternalStore } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {

    const result =useSelector((state)=>state.cartData)
    console.log('redux data' , result)


   
  
    
  
     
    
      
          
    
  return (

  <>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div">
          <Stack spacing={2} direction="row" style={{justifyContent:'space-between'}}>
          
          
          
          <div style={{justifyContent:'space-between'}}>
          <MenuIcon />

          <Link to='/cart'>
          <Badge badgeContent={result.length} color="success" style={{textAlign:'right',marginLeft:'1250px'}}> 
        <ShoppingCartIcon  color="action" />
      </Badge>
          </Link>
    
          </div>
         
    </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

{/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit"><Link to='/cart'>
          <Badge badgeContent={result.length} color="success" style={{textAlign:'right',marginLeft:'1250px'}}> 
        <ShoppingCartIcon  color="action" />
      </Badge>
          </Link></Button>
        </Toolbar>
      </AppBar>
    </Box> */}
  </>
  )
}

export default Header