import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Snackbar, Alert, Paper } from '@mui/material';
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
        {/* Form Container with Paper */}
        <Paper
          elevation={5}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: '#f5f5f5',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderRadius: '8px', backgroundColor: '#3f51b5', '&:hover': { backgroundColor: '#303f9f' } }}>
              Login
            </Button>
          </form>
        </Paper>

        {/* Snackbar for showing success/error message */}
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
      </Box>
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
