"use client";

import React from 'react';
import { BottomNavigation, BottomNavigationAction, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/'); // Home
        break;
      case 1:
        router.push('/prispevok'); // Posts
        break;
      case 2:
        router.push('/profil'); // Profile
        break;
      case 3:
        if (!session) {
          router.push('/auth/prihlasenie'); // Direct to Sign In page
        } else {
          router.push('/auth/odhlasenie'); // Direct to Sign Out page
        }
        break;
      case 4:
        router.push('/auth/registracia'); // Direct to Sign Up page
        break;
      default:
        break;
    }
  };

  const navigationActions = [
    <BottomNavigationAction key="home" label="Domov" icon={<HomeIcon />} />,
    <BottomNavigationAction key="posts" label="Prispevky" icon={<AddCircleIcon />} />,
  ];

  if (session) {
    navigationActions.push(
      <BottomNavigationAction
        key="profile"
        label="Profil"
        icon={
          <Avatar
            alt="User Profile Picture"
            src={session.user?.image || ''}
            sx={{ width: 24, height: 24 }}
          />
        }
        onClick={() => router.push('/profil')}
      />,
      <BottomNavigationAction
        key="logout"
        label="Odhlásiť"
        icon={<HowToRegIcon />}
        onClick={() => router.push('/auth/odhlasenie')} // Direct to Sign Out page
      />
    );
  } else {
    navigationActions.push(
      <BottomNavigationAction
        key="signin"
        label="Prihlásenie"
        icon={<HowToRegIcon />}
        onClick={() => router.push('/auth/prihlasenie')} // Direct to Sign In page
      />,
      <BottomNavigationAction
        key="signup"
        label="Registrácia"
        icon={<HowToRegIcon />}
        onClick={() => router.push('/auth/registracia')} // Direct to Sign Up page
      />
    );
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleNavigation}
      showLabels
      sx={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      {navigationActions}
    </BottomNavigation>
  );
};

export default NavBar;