import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

  // const [openModal, setOpenModal] = useState(false)

  // const handleOpenModal = () => {
  //   setOpenModal(true)
  // }

  // const handleCloseModal = () => {
  //   setOpenModal(false)
  // }


  return (
    <div className='App'>

      {/* <button className='openModal' onClick={handleOpenModal}>Open modal</button>

      <div className={openModal ? 'card-container' : 'modal-none'}>
        <div className='card-example'>
        <button onClick={handleCloseModal} className='card-example_close'>x</button>
          <img src="https://1000marcas.net/wp-content/uploads/2020/11/United-Airlines-logo-768x415.png" alt="" />
          <ul>
            <h3>Beneficios</h3>
            <li>Exoneraciones de penalidad</li>
            <li>Waivers</li>
            <li>Upgrades</li>
          </ul>
          <a href="https://jetstream.united.com/?lang=es#/public-landing" target={'_blank'}>
          <button className='card-example_go' onClick={handleCloseModal}>Ir</button>
            </a>
        </div>
      </div> */}

      <div>
        <Card />
      </div>
    </div>
  )
}

export default App