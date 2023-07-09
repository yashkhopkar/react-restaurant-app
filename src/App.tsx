import './App.css';
import { Outlet } from 'react-router-dom';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
