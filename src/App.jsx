import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTask from './components/add-task';
import EditTask from './components/edit-task';
import { PaperWrapper } from './components/style';

const App = () => {
  return (
    <div className="App">
      <PaperWrapper square sx={{ pb: '1' }}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/task/:id/:statusId" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </PaperWrapper>
    </div>
  );
}

export default App;
