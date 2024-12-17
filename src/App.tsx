import { PageTop } from './components/homeComponents/layout';
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PageTop />}/>        
          </Routes>
      </Router>
      
    </div>
    
  )
}

export default App
