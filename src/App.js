import React, { useState } from 'react';
import Categories from './components/Categories';
import Items from './components/Items';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define a dark theme using Material-UI's theming capabilities
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Enables dark mode
  },
});

function App() {
  // State to track if a category is selected
  const [categorySelected, setCategorySelected] = useState(false);

  // Handler function to update categorySelected state
  const handleCategoryClick = () => {
    setCategorySelected(true);
  };

  return (
    // ThemeProvider to apply the Material-UI theme
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Normalize CSS and apply baseline styles */}
      <div className="app-container">
        <div className="categories-container">
          {/* Categories component with a click handler */}
          <Categories onCategoryClick={handleCategoryClick} />
        </div>
        {categorySelected ? (
          // Display items if a category is selected
          <div className="items-container">
            <Items />
          </div>
        ) : (
          // Display a welcome message and image when no category is selected
          <div className="placeholder-container">
            <h2>Welcome to the Restaurant App</h2> 
            <img src={`${process.env.PUBLIC_URL}/welcome.png`} alt="Welcome" style={{ borderRadius: '10px' , transform: 'scale(0.97)'}}/>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
