import { useState } from 'react'
import './App.css'
import ButtonsAndIcons from './components/ButtonsAndIcons/ButtonsAndIcons'
import ChoicePage from './components/ChoicePage/ChoicePage'

import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'

//Imagens
import MiniBlog from "./miniblog.png"
import SecretWord from "./secretword.png"
import Quiz from "./quiz.png"
import Nativa from "./nativa.png"


const stages = [
  {id: 1, name: "projects"},
  {id: 2, name: "skills"},
  {id: 3, name: "about"}
]

function App() {
  const [choiceStage, setChoiceStage] = useState(stages[0].name)

  //console.log(choiceStage)

  const handleChoiceProjetc = (e) => {
    setChoiceStage(stages[0].name)
    const button = e.target
  }

  const handleChoiceSkills = (e) => {
    setChoiceStage(stages[1].name)
    const button = e.target
  }

  const handleChoiceAbout = () => {
    setChoiceStage(stages[2].name)
  }

  return (
    <div className="App">
      <Profile/>
      <ButtonsAndIcons />
      <ChoicePage 
        handleClickPro={handleChoiceProjetc}
        handleClickSki={handleChoiceSkills}
        handleClickAbo={handleChoiceAbout}
      />
      {choiceStage === "projects" && (
        <div>
          <h3 style={{textAlign: "center", marginTop: "10px"}}>My projects</h3>
          <div className="max_project_container">
            <div className='projects_container'>
              <Projects 
                title="Mini Blog"
                image={MiniBlog}
                link="https://miniblogmiqueias.netlify.app"
              />
              <Projects 
                title="Secret Word"
                image={SecretWord}
                link="https://secretword.netlify.app"
              />
              <Projects 
                title="Quiz with JS"
                image={Quiz}
                link="https://thequizmksb.netlify.app/"
              />
              <Projects 
                title="Nativa BR"
                image={Nativa}
                link="https://nativabr.netlify.app/"
              />
            </div>
          </div>
        </div>
      )}
      {choiceStage === "skills" && <Skills/>}
      {choiceStage === "about" && <About />}

      <div>
        <p className='footer'>This site was created with React JS</p>
      </div>
    </div>
  )
}

export default App
