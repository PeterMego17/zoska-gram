'use client';

import { signOut } from "next-auth/react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const metadata = { title: "Odhlásenie | ZoškaSnap" };

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
