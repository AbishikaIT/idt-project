import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RecipeHelperScreen from './screens/RecipeHelperScreen';
import AboutScreen from './screens/AboutScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/recipe-helper" element={<RecipeHelperScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </Router>
  );
}
