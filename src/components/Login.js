import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Snackbar, Alert } from '@mui/material';
import { connect } from 'react-redux';
import { postLogin } from '../redux/action/action';
import { useNavigate } from 'react-router-dom';

const Login = ({ postLogin, login }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  const navigate = useNavigate();

  console.warn("Login", login.data?.message)

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin({ mobile, password });
  };

  useEffect(() => {
    // Only act if we have either a success or an error state
    if (login.data || login.error) {
      const message = login.isSuccess ? login.data?.message : login.error?.message || "Login failed";
      
      setSnackbarMessage(message);
      setSnackbarSeverity(login.isSuccess ? 'success' : 'error');
      setOpenSnackbar(true);
  
      if (login.isSuccess) {
        setTimeout(() => {
          navigate('/add-placement');
        }, 1500);
      }
    }
  }, [login, navigate]);
  

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Mobile No."
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  login: state.Login,
});

const mapDispatchToProps = (dispatch) => ({
  postLogin: (data) => dispatch(postLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
