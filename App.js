import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './pages/home';
import { Resume } from './pages/resume';
import { useState } from 'react';
import { createContext } from 'react';

export const allStates=createContext()

function App() {

  const [name,setName]=useState("")

  const[education,setEducation]=useState()

  const[experince,setExperince]=useState()

  const[training,setTraining]=useState()

  const[skills,setSkills]=useState()

  const[character,setCharacter]=useState()

  const[summary,setSummary]=useState()

  const[birth,setBirth]=useState()

  const[birthPlace,setBirthPlace]=useState()

  const[nationality,setNationality]=useState()

  const[phone,setPhone]=useState()

  const[gmail,setGmail]=useState()

  const[facebook,setFacebook]=useState()

  const[files,setFiles]=useState()
  const[previews,setPreviews]=useState()

   return (
    <div className='App'>
     <allStates.Provider value={{
      name,setName,
      education,setEducation,
      experince,setExperince,
      training,setTraining,
      skills,setSkills,
      character,setCharacter,
      summary,setSummary,
      birth,setBirth,
      birthPlace,setBirthPlace,
      nationality,setNationality,
      phone,setPhone,
      gmail,setGmail,
      facebook,setFacebook,
      files,setFiles,
      previews,setPreviews
      }}>
      <Router>
        <div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
      </allStates.Provider>
    </div>
  );
}

export default App;
