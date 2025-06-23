import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar';
import BiIdeas from './pages/ideas/bi_ideas';
import IdeaForm from './pages/ideas/ideaForm';
import IdeaBank from './pages/ideas/ideaBank';
import Home from './pages/home';
import IdeaDetails from './pages/ideas/ideaDetails';
import UpdateIdea from './pages/ideas/UpdateIdea';
import Services from './pages/services/services';
import About from './pages/about';
import Projects from './pages/initiatives/projects';
import Consulting from './pages/services/consulting';
import Training from './pages/services/training';
import Workshops from './pages/services/workshops';
import Mentorship from './pages/services/mentorship';
import Research from './pages/services/research';
import Current from './pages/initiatives/current';
import Completed from './pages/initiatives/completed';
import Upcoming from './pages/initiatives/upcoming';
import SuccessStories from './pages/initiatives/success-stories';
import Partners from "./pages/partners/partners";


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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bi-ideas" element={<BiIdeas />} />
          <Route path="/idea-form" element={<IdeaForm />} />
          <Route path="/idea-bank" element={<IdeaBank />} />
          <Route path="/idea/:id" element={<IdeaDetails />} />
          <Route path="/update-idea/:ideaId" element={<UpdateIdea />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/workshops" element={<Workshops />} />
          <Route path="/services/mentorship" element={<Mentorship />} />
          <Route path="/services/research" element={<Research />} />
          <Route path="/projects/current" element={<Current />} />
          <Route path="/projects/completed" element={<Completed />} />
          <Route path="/projects/upcoming" element={<Upcoming />} />
          <Route path="/projects/success-stories" element={<SuccessStories />} />
          <Route path="/partners" element={<Partners />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
