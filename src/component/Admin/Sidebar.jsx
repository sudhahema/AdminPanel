import React , {useState} from 'react'
import logo from '../../assests/image/image-2237.png';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DevicesIcon from '@mui/icons-material/Devices';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [openAd, setOpenAd] = useState(false);
  const [opensetting, setOpenSetting] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleAdClick = () => {
    setOpenAd(!openAd);
  };
  const handleSettingClick = () => {
    setOpenSetting(!opensetting);
  };
  
  const handleRegisterPage =()=>{
    navigate('/')
  }
  const handleLoginPage =()=>{
    navigate('/login')
  }

  return (
    <div className='sidebar_conatiner'>
        <div className='sidebar_header'>
          <div className='logoIcon'>
          <img src={logo} alt='image'/>
          </div>
            {/* <h4>Profile</h4> */}
            <List
      sx={{ width: '100%', bgcolor: 'transparent' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <GroupAddIcon   sx={{color : 'white'}} />
        </ListItemIcon>
        <ListItemText primary="User Group" />
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <DraftsIcon  sx={{color : 'white'}} />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton> */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon  sx={{color : 'white'}} />
        </ListItemIcon>
        <ListItemText primary="Auth" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleRegisterPage}>
            <ListItemIcon>
              <HowToRegIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={handleLoginPage}>
            <ListItemIcon>
              <LoginIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Login" to='/login' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleAdClick}>
        <ListItemIcon>
          <AutoFixHighIcon  sx={{color : 'white'}} />
        </ListItemIcon>
        <ListItemText primary="Advance" />
        {openAd ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAd} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DevicesIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LoyaltyIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Loyalty"  />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleSettingClick}>
        <ListItemIcon>
          <SettingsIcon  sx={{color : 'white'}} />
        </ListItemIcon>
        <ListItemText primary="Setting" />
        {opensetting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={opensetting} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AppsIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ManageHistoryIcon sx={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Version"  />
          </ListItemButton>
        </List>
      </Collapse>

    </List>
        </div>
    </div>
  )
}

export default Sidebar