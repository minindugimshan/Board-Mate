// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
// // import HomePage from './pages/HomePage'; 
// import { AuthProvider } from './context/AuthContext';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/signin" element={<SignInPage />} />
//             <Route path="/signup" element={<SignUpPage />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export default App;



import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { FavoritesProvider } from './context/FavoritesContext';
import AppRoutes from './routes/AppRoutes.jsx';
import './App.css';



function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <FavoritesProvider> */}
        <div className="app">
          <AppRoutes />
        </div>
      {/* </FavoritesProvider> */}
    </LocalizationProvider>
  )
}

export default App;









