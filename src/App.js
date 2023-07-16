import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Rates from './pages/Rates';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={ <Rates/>} />
      </Route>
    </Routes>
  );
}

export default App;
