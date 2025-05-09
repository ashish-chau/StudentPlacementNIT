// import React, { useState } from 'react';
// import {
//   Container,
//   TextField,
//   Button,
//   Box,
//   MenuItem,
//   Typography,
//   InputLabel,
//   Select,
//   FormControl,
//   Paper,
// } from '@mui/material';

// const courseOptions = ['BCA', 'MCA', 'B.Tech', 'MBA'];

// const AddPlacement = () => {
//   const [form, setForm] = useState({
//     batchName: '',
//     batchTime: '',
//     startDate: '',
//     courseName: '',
//     studentName: '',
//     mobile: '',
//     email: '',
//     companyName: '',
//     location: '',
//     technology: '',
//     package: '',
//     offerLetter: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setForm({
//       ...form,
//       [name]: type === 'file' ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', form);
//   };

//   return (
//     <Container maxWidth="md">
//       <Paper
//         elevation={3}
//         sx={{
//           p: 4,
//           mt: 5,
//           borderRadius: 3,
//           border: '1px solid #ccc',
//           backgroundColor: '#fff',
//         }}
//       >
//         <Typography variant="h5" align="center" gutterBottom>
//           Add Placement
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 2,
//               justifyContent: 'space-between',
//             }}
//           >
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Batch Name"
//               name="batchName"
//               value={form.batchName}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Batch Time"
//               type="time"
//               name="batchTime"
//               value={form.batchTime}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Batch Start Date"
//               type="date"
//               name="startDate"
//               value={form.startDate}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <FormControl sx={{ flexBasis: '48%' }} fullWidth required>
//               <InputLabel>Course Name</InputLabel>
//               <Select
//                 name="courseName"
//                 value={form.courseName}
//                 onChange={handleChange}
//                 label="Course Name"
//               >
//                 {courseOptions.map((course) => (
//                   <MenuItem key={course} value={course}>
//                     {course}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Student Name"
//               name="studentName"
//               value={form.studentName}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Mobile Number"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Email ID"
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Company Name"
//               name="companyName"
//               value={form.companyName}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Location"
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Technology"
//               name="technology"
//               value={form.technology}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               fullWidth
//               sx={{ flexBasis: '48%' }}
//               label="Package"
//               name="package"
//               value={form.package}
//               onChange={handleChange}
//               required
//             />
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{ flexBasis: '48%', height: '56px' }}
//             >
//               Upload Offer Letter
//               <input
//                 type="file"
//                 name="offerLetter"
//                 hidden
//                 accept=".pdf,.jpg,.png"
//                 onChange={handleChange}
//                 required
//               />
//             </Button>
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{ flexBasis: '48%', height: '56px' }}
//             >
//               Upload Email For Student
//               <input
//                 type="file"
//                 name="offerLetter"
//                 hidden
//                 accept=".pdf,.jpg,.png"
//                 onChange={handleChange}
//                 required
//               />
//             </Button>
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{ flexBasis: '48%', height: '56px' }}
//             >
//               Upload Feedback Email
//               <input
//                 type="file"
//                 name="offerLetter"
//                 hidden
//                 accept=".pdf,.jpg,.png"
//                 onChange={handleChange}
//                 required
//               />
//             </Button>
//           </Box>

//           <Box mt={3}>
//             <Button type="submit" variant="contained" fullWidth>
//               Submit
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default AddPlacement;
import React, { useState } from 'react';
import {
  Container, TextField, Button, Box, MenuItem, Typography,
  InputLabel, Select, FormControl, Paper, Stepper, Step, StepLabel
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { connect } from 'react-redux';
import { postPlacementDetails } from '../redux/action/action';

const steps = ['Batch & Course Info', 'Student & Placement Info', 'Upload Documents'];

const courseOptions = ['BCA', 'MCA', 'B.Tech', 'MBA'];

const AddPlacement = ({ postPlacementDetails, PlacementDetails }) => {
  const [activeStep, setActiveStep] = useState(0);
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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to send as multipart/form-data
    const formData = new FormData();

    // Append form data fields to FormData
    Object.keys(form).forEach((key) => {
      // If it's a file input, append the file, otherwise append the value
      if (key === 'offerLetter' || key === 'studentEmailDoc' || key === 'feedbackEmail') {
        if (form[key]) {
          formData.append(key, form[key]);
        }
      } else {
        formData.append(key, form[key]);
      }
    });

    // Call the postPlacementDetails action with the FormData
    postPlacementDetails(formData);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField fullWidth label="Batch Name" name="batchName" value={form.batchName} onChange={handleChange} sx={{ mb: 2 }} />
            <TextField fullWidth label="Batch Time" type="time" name="batchTime" value={form.batchTime} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
            <TextField fullWidth label="Start Date" type="date" name="startDate" value={form.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Course Name</InputLabel>
              <Select name="courseName" value={form.courseName} onChange={handleChange} label="Course Name">
                {courseOptions.map((course) => (
                  <MenuItem key={course} value={course}>{course}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              name="studentName"
              value={form.studentName}
              onChange={handleChange}
              label={<span>Student Name <span style={{ color: 'red' }}>*</span></span>}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={<span>Mobile <span style={{ color: 'red' }}>*</span></span>}
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={<span>Company Name <span style={{ color: 'red' }}>*</span></span>}
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={<span>Location <span style={{ color: 'red' }}>*</span></span>}
              name="location"
              value={form.location}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={<span>Technology <span style={{ color: 'red' }}>*</span></span>}
              name="technology"
              value={form.technology}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label={<span>Package <span style={{ color: 'red' }}>*</span></span>}
              name="package"
              value={form.package}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </>
        );
      case 2:
        return (
          <>
            <Button variant="contained" component="label" fullWidth sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <CloudUploadIcon sx={{ mr: 1 }} />
              Upload Offer Letter
              <input type="file" name="offerLetter" hidden accept=".pdf,.jpg,.png" onChange={handleChange} />
            </Button>
            <Typography variant="body2" align="center" sx={{ mb: 1 }}>
              or
            </Typography>
            <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
              Upload Email For Student
              <input type="file" name="studentEmailDoc" hidden accept=".pdf,.jpg,.png" onChange={handleChange} />
            </Button>
            <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
              Upload Feedback Email
              <input type="file" name="feedbackEmail" hidden accept=".pdf,.jpg,.png" onChange={handleChange} />
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 5, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add Placement
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {renderStepContent(activeStep)}

          <Box mt={3} display="flex" justifyContent="space-between">
            <Button type="button" disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button type="button" variant="contained" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  PlacementDetails: state.PlacementDetails,
});

const mapDispatchToProps = (dispatch) => ({
  postPlacementDetails: (data) => dispatch(postPlacementDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlacement);



// export default AddPlacement;
