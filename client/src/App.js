import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PageContainer from './pages/PageContainer';
import Users from './pages/Users'

function App() {
  return (
    <div>
      <Routes>
        <Route path ='/' element={<PageContainer />} >
          <Route index element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

