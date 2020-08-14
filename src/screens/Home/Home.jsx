import React from 'react'
import { Link } from 'react-router-dom'
import UIButton from '../../components/UI/Button/Button'
import UILogo from '../../components/UI/Logo/Logo'

import './Home.scss'

const Home = () => (
  <div className="container-home">
    <UILogo/>
    <span class="welcome-text">
      Seja bem-vindo a avaliação do 
      <strong>João Victor Moreira da Silva</strong>
    </span>
    <Link to="/maxdoctor">
      <UIButton
        type="button"
        text="Acessar Aplicação"
      />
    </Link>
  </div>
)

export default Home