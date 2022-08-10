import './App.css';
import { Routes, Route} from 'react-router-dom';
import { PageWrapper } from './layouts';
import {FormPage, userRepoPage} from './Pages';



function App() {
  return (
    <div id="app">
    <PageWrapper />
      <Routes>
          <Route path="/" element={<Pages.FormPage />} />
          <Route path="/userRepo" element={<Pages.userRepoPage />} />
      </Routes>
    </div>
  );
}

export default App;
