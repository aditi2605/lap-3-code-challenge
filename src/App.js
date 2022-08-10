import './App.css';
import { Routes, Route} from 'react-router-dom';
import Form from './components/form';
import userRepo from './components/userRepo';



function App() {
  return (
    <>
    <h2>hello</h2>
      <Routes>
          <Route path="/" element={<Pages.FormPage />} />
          <Route path="/userRepo" element={<Pages.userRepoPage />} />
      </Routes>
    </>
  );
}

export default App;
