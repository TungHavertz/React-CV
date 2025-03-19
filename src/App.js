import { useState } from 'react'
import React from 'react'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Edu from './components/Edu/Edu'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Projects'
import Object from './components/Object/Object'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import Modal from './components/Modal/Modal'
import Interest from './components/Interest/Interest'
function App() {
  const [modal, setModal] = useState('')

  return (
    <div>
        <Header></Header>
        <Intro></Intro>
        <Edu></Edu>
        <Skills
          setModal={setModal}
        ></Skills>
        <Project></Project>
        <Interest></Interest>
        <Object></Object>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
        <Modal
          modal={modal}
          setModal={setModal}
        ></Modal>
    </div>
  )
}

export default App;
