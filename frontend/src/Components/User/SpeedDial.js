import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { ListAltRounded, Person2Rounded, ShoppingCart, ExitToAppRounded } from '@mui/icons-material';
import { Backdrop } from '@mui/material';
import image from "../../Assets/Images/ProfilePic.jpg"; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

export default function UserOptions() {
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();

  // Define the options for the SpeedDial actions
  const options = [
    { icon: <ListAltRounded />, name: 'Societies' },
    { icon: <Person2Rounded />, name: 'Profile' },
    { icon: <ShoppingCart />, name: 'Events' },
    { icon: <ExitToAppRounded />, name: 'Logout', func: logout },
  ];
  
  function logout(){
     navigate("/login")
  }

  return (
    <>
      <Backdrop 
        open={open} 
        sx={{ 
          zIndex: 10, 
          color: '#fff', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust backdrop color and opacity
        }}
      />
      <SpeedDial
        ariaLabel="User SpeedDial"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{ 
          position: 'fixed', 
          top: '1vmax', 
          right: '3vmax', 
          zIndex: 11,
        }}
        direction="down"
        open={open}
        icon={
          <img 
            src={image} 
            alt="User Avatar" 
            style={{ width: '100%', height: '100%', borderRadius: '50%' }} 
          />
        }
      >
        {options.map((action) => (
          <SpeedDialAction
            key={action.name}
            onClick={action.func}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </>
  );
}
