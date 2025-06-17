import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar';
import BiIdeas from './pages/bi_ideas';
import IdeaForm from './pages/ideaForm';
import IdeaBank from './pages/ideaBank';
import Home from './pages/home';
import IdeaDetails from './pages/ideaDetails';
import UpdateIdea from './pages/UpdateIdea';

import About from './pages/about';
import Projects from './pages/projects';
const App = () => {
  // const [message, setMessage] = useState('')


  // useEffect(() => {
  //   // Fetch data from backend
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(data => setMessage(data.message))
  //     .catch(error => console.error('Error:', error))
  // }, [])

  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bi-ideas" element={<BiIdeas />} />
            <Route path="/idea-form" element={<IdeaForm />} />
            <Route path="/idea-bank" element={<IdeaBank />} />
            <Route path="/idea/:id" element={<IdeaDetails />} />
            <Route path="/update-idea/:ideaId" element={<UpdateIdea />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>

      </main>
    </div>
  )
}

export default App
