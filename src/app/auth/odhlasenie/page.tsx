'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div>
      <Typography variant="h4">Odhlásenie</Typography>
      <Button variant="contained" onClick={() => signOut()}>
        Odhlásiť sa
      </Button>
    </div>
  );
}
