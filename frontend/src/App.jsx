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
import Partners from "./pages/partners/partners";
import SubmitIdea from "./pages/ideas/submitIdea";
import FeaturedIdeas from "./pages/ideas/featuredIdeas";
import Campaigns from "./pages/campaigns/campaigns";
import Corporate from "./pages/initiatives/corporate";
import Travel from "./pages/initiatives/travel";
import Retail from "./pages/initiatives/retail";
import ECommerce from "./pages/initiatives/ecommerce";
import ShetheChange from "./pages/initiatives/shetheChange";
import EMC from "./pages/initiatives/emc";
import Awards from "./pages/initiatives/awards";


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
          <Route path="/submit-idea" element={<SubmitIdea />} />
          <Route path="/idea-bank/submit-idea" element={<SubmitIdea />} />
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
          <Route path="/partners" element={<Partners />} />
          <Route path="/featured-ideas" element={<FeaturedIdeas />} />
          <Route path="/our-campaigns" element={<Campaigns />} />
          <Route path="/projects/corporate" element={<Corporate />} />
          <Route path="/projects/travel" element={<Travel />} />
          <Route path="/projects/retail" element={<Retail />} />
          <Route path="/projects/ecommerce" element={<ECommerce />} />
          <Route path="/projects/awards" element={<Awards />} />
          <Route path="/projects/emc" element={<EMC />} />
          <Route path="/projects/shethechange" element={<ShetheChange />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
