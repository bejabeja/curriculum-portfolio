import './App.css';
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import './App.css'
import Languages from './sections/Languages';


function App() {
  return (
    <main className='app'>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Education></Education>
      <Skills></Skills>
      <Languages></Languages>
    </main>
  );
}

export default App;
