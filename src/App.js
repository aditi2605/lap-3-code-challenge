import './App.css';
import { Routes, Route} from 'react-router-dom';
import Form from './components/form';
import userRepo from './components/userRepo';
import * as Pages from './Pages';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Pages.FormPage />} />
          <Route path="/userRepo" element={<Pages.userRepoPage />} />
      </Routes>
    </>
  );
}

export default App;
