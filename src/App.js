import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar-components/NavBar.jsx';
import Pages from './pages/Pages.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
