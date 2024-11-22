'use client';

import { signIn } from "next-auth/react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SignIn() {
  return (
    <div>
      <Typography variant="h4">Prihlásenie</Typography>
      <Button variant="contained" onClick={() => signIn("google")}>
        Prihlásiť sa cez Google
      </Button>
    </div>
  );
}
