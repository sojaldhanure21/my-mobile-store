import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, ToggleButtonGroup, TextField, ToggleButton, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('login');
  const [role, setRole] = useState('user');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="logo">Mobile Store</Typography>
          <div className="spacer" />
          <Button color="inherit" onClick={() => setOpen(true)}>Login</Button>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{mode === 'login' ? 'Login' : 'Sign Up'}</DialogTitle>
        <DialogContent className="login-dialog">
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(e, newMode) => newMode && setMode(newMode)}
            className="toggle-mode"
          >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="signup">Sign Up</ToggleButton>
          </ToggleButtonGroup>
          {mode === 'signup' && (
            <TextField
              margin="dense"
              label="Name"
              name="name"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          )}
          <TextField
            margin="dense"
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Password"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          {mode === 'signup' && <FormControl className="user-group">
            <FormLabel>User</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={role}
              name="radio-buttons-group"
              onChange={(e, newRole) => newRole && setRole(newRole)}
              className="user-options"
            >
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            </RadioGroup>
          </FormControl>
          }
          <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Header;