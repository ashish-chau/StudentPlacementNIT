import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  MenuItem,
  Typography,
  InputLabel,
  Select,
  FormControl,
  Snackbar,
  Alert as MuiAlert,
} from '@mui/material';
import { connect } from 'react-redux';
import { postPlacementDetails } from '../redux/action/action';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const courseOptions = ['Java', 'AWS', 'Oracle', 'Web Development'];

const AddPlacement = ({ postPlacementDetails, PlacementDetails }) => {
  const [form, setForm] = useState({
    batchName: '',
    batchTime: '',
    startDate: '',
    courseName: '',
    studentName: '',
    mobile: '',
    email: '',
    companyName: '',
    location: '',
    technology: '',
    package: '',
    offerLetter: null,
    studentEmailDoc: null,
    feedbackEmail: null,
  });

  const [errors, setErrors] = useState({
    mobile: '',
    email: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let updatedValue = type === 'file' ? files[0] : value;

    if (name === 'mobile') {
      if (!/^\d{0,10}$/.test(value)) return;
      if (value && !/^\d{10}$/.test(value)) {
        setErrors((prev) => ({ ...prev, mobile: 'Invalid mobile number' }));
      } else {
        setErrors((prev) => ({ ...prev, mobile: '' }));
      }
    }

    if (name === 'email') {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

    setForm({
      ...form,
      [name]: updatedValue,
    });
  };

  const isFormValid = () => {
    const requiredFields = [
      'batchName',
      'batchTime',
      'startDate',
      'courseName',
      'studentName',
      'mobile',
      'email',
      'companyName',
      'location',
      'technology',
      'package',
    ];
    for (let field of requiredFields) {
      if (!form[field]) return false;
    }
    if (errors.mobile || errors.email) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (['offerLetter', 'studentEmailDoc', 'feedbackEmail'].includes(key)) {
        if (form[key]) {
          formData.append(key, form[key]);
        }
      } else {
        formData.append(key, form[key]);
      }
    });

    postPlacementDetails(formData);

    setForm({
      batchName: '',
      batchTime: '',
      startDate: '',
      courseName: '',
      studentName: '',
      mobile: '',
      email: '',
      companyName: '',
      location: '',
      technology: '',
      package: '',
      offerLetter: null,
      studentEmailDoc: null,
      feedbackEmail: null,
    });

    setErrors({
      mobile: '',
      email: '',
    });
  };

  useEffect(() => {
    if (PlacementDetails.isSuccess === true) {
      setSnackbarMsg(PlacementDetails.data.message);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }
  }, [PlacementDetails]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f0f2f5', py: 5 }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: 4,
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0',
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#3f51b5', mb: 5 }}
          >
            Add Placement
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'space-between',
              }}
            >
              <TextField
                label="Batch Name"
                name="batchName"
                value={form.batchName}
                onChange={handleChange}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Batch Time"
                type="time"
                name="batchTime"
                value={form.batchTime}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Batch Start Date"
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <FormControl fullWidth sx={{ flexBasis: '48%' }} required>
                <InputLabel>Course Name</InputLabel>
                <Select
                  name="courseName"
                  value={form.courseName}
                  onChange={handleChange}
                  label="Course Name"
                >
                  {courseOptions.map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Student Name"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Mobile Number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Email ID"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Technology"
                name="technology"
                value={form.technology}
                onChange={handleChange}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <TextField
                label="Package"
                name="package"
                value={form.package}
                onChange={handleChange}
                required
                fullWidth
                sx={{ flexBasis: '48%' }}
              />
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ flexBasis: '48%', height: '56px' }}
              >
                Upload Offer Letter
                <input
                  type="file"
                  name="offerLetter"
                  hidden
                  accept=".pdf,.jpg,.png"
                  onChange={handleChange}
                />
              </Button>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ flexBasis: '48%', height: '56px' }}
              >
                Upload Email For Student
                <input
                  type="file"
                  name="studentEmailDoc"
                  hidden
                  accept=".pdf,.jpg,.png"
                  onChange={handleChange}
                />
              </Button>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ flexBasis: '48%', height: '56px' }}
              >
                Upload Feedback Email
                <input
                  type="file"
                  name="feedbackEmail"
                  hidden
                  accept=".pdf,.jpg,.png"
                  onChange={handleChange}
                />
              </Button>
            </Box>
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                disabled={!isFormValid()}
              >
                Submit
              </Button>
            </Box>
          </form>

          {/* Snackbar */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
              sx={{ width: '100%' }}
            >
              {snackbarMsg}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  PlacementDetails: state.PlacementDetails,
});

const mapDispatchToProps = (dispatch) => ({
  postPlacementDetails: (data) => dispatch(postPlacementDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlacement);
