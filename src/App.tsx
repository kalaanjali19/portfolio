

import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Skills from './components/Skills';
import About from './components/About';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Skills />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
 
  );
}

export default App;