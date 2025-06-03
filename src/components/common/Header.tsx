import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  ToggleButtonGroup,
  TextField,
  ToggleButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../store/api";
import MenuIcon from '@mui/icons-material/Menu';

interface formErrorsProps {
  email?: string;
  password?: string;
  name?: string;
}

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [formErrors, setFormErrors] = useState<formErrorsProps>({});
  const [login] = useLoginMutation();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [errorAlert, setErrorAlert] = useState<string>('');

  const handleLogin = async () => {
    const isValid = validateForm(form);
    if (isValid) {
      const payload = {
        email: form.email,
        password: form.password,
      };
      try {
        const result = await login(payload).unwrap();
        if (result && result.message && result.message.includes("Login successful.")) {
          setTimeout(() => {
            setOpen(false);
            setErrorAlert('');
            navigate("/admin-dashboard");
          }, 1000);
        } else {
          setErrorAlert(result.message);
        }
      } catch (error: any) {
        setErrorAlert("Unable to login. Please try again.");
      }
    }
  };

  const handleToggleMode = (newMode: string) => {
    setMode(newMode);
    setForm({ name: "", email: "", password: "" });
    setFormErrors({});
  }

  const handleChange = (e: any) => {
    const value =
      e.target.name === "name"
        ? e.target.value.replace(/^\s+/, "")
        : e.target.value;
    setForm({ ...form, [e.target.name]: value });
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: e.target.value ? "" : `${e.target.name} is required`,
    }));
  };

  const validateForm = (formToValidate: { name?: string; email?: string; password?: string }) => {
    let errors: { email?: string; password?: string; name?: string } = {};
    if (!formToValidate.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formToValidate.email)) {
      errors.email = "Invalid email address";
    }
    if (!formToValidate.password) {
      errors.password = "Password is required";
    }
    if (mode === "signup") {
      if (!formToValidate.name) {
        errors.name = "Name is required";
      } else if (!isNaN(Number(formToValidate.name))) {
        errors.name = "Name cannot be a number";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="logo" onClick={() => navigate("/")}>
            Mobile Store
          </Typography>
          <div className="spacer" />
          <Button color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{mode === "login" ? "Login" : "Sign Up"}</DialogTitle>
        <DialogContent className="login-dialog">
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(e, newMode) => newMode && handleToggleMode(newMode)}
            className="toggle-mode"
          >
            <ToggleButton value="login">Login</ToggleButton>
            <ToggleButton value="signup">Sign Up</ToggleButton>
          </ToggleButtonGroup>
          {mode === "signup" && (
            <TextField
              margin="dense"
              label="Name"
              name="name"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              error={!!formErrors?.name}
              helperText={formErrors?.name}
              required
            />
          )}
          <TextField
            margin="dense"
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            error={!!formErrors?.email}
            helperText={formErrors?.email}
            required
          />
          <TextField
            margin="dense"
            label="Password"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            error={!!formErrors?.password}
            helperText={formErrors?.password}
            required
          />
          {mode === "signup" && (
            <FormControl className="user-group">
              <FormLabel>User</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={role}
                name="radio-buttons-group"
                onChange={(e, newRole) => newRole && setRole(newRole)}
                className="user-options"
              >
                <FormControlLabel
                  value="user"
                  control={<Radio />}
                  label="User"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
              </RadioGroup>
            </FormControl>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
            onClick={handleLogin}
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </DialogContent>
        {errorAlert && <Alert severity="error">{errorAlert}</Alert>}
      </Dialog>
    </>
  );
}

export default Header;