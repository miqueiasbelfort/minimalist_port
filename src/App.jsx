import { useState } from 'react'
import './App.css'
import ButtonsAndIcons from './components/ButtonsAndIcons/ButtonsAndicons'
import ChoicePage from './components/ChoicePage/ChoicePage'

import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


const stages = [
  {id: 1, name: "projects", choiced: true},
  {id: 2, name: "skills", choiced: false}
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

  return (
    <div className="App">
      <Profile/>
      <ButtonsAndIcons />
      <ChoicePage 
        handleClickPro={handleChoiceProjetc}
        handleClickSki={handleChoiceSkills}
      />
      {choiceStage === "projects" && (
        <div>
          <h3 style={{textAlign: "center", marginTop: "10px"}}>My projects</h3>
          <div className='projects_container'>
            <Projects title="Miqueias Belfort"/>
            <Projects title="Miqueias Belfort"/>
            <Projects title="Miqueias Belfort"/>
            <Projects title="Miqueias Belfort"/>
            <Projects title="Miqueias Belfort"/>
            <Projects title="Miqueias Belfort"/>
          </div>
        </div>
      )}
      {choiceStage === "skills" && <Skills/>}
    </div>
  )
}

export default App
