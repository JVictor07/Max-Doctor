import React from 'react';

import AgilityIcon from '../../assets/main_icons/agility_icon.png'
import ConvenienceIcon from '../../assets/main_icons/convenience_icon.png'
import FacilityIcon from '../../assets/main_icons/facility_icon.png'
import FreeShippingIcon from '../../assets/main_icons/free-shipping_icon.png'
import QuantityIcon from '../../assets/main_icons/quantity_icon.png'

import LoginForm from '../../components/Login/Form/Form'
import UIIcon from '../../components/UI/Icon/Icon'
import UILogo from '../../components/UI/Logo/Logo'

import './Login.scss';

const Login = () => (
  <div className="App container">
    <header>
      <UILogo description="A PLATAFORMA DE COMPRA DIRETA DO SEU ANESTÉSICO TÓPICO" />
    </header>
    <main className="main">
      <LoginForm/>
    </main>
    <footer className="footer">
      <UIIcon
        img_src={FacilityIcon}
        img_alt="Teste"
        text="FACILIDADE DE COMPRA"
      />
      <UIIcon
        img_src={QuantityIcon}
        img_alt="Teste"
        text="QUANTIDADE NÃO LIMITADA"
      />
      <UIIcon
        img_src={FreeShippingIcon}
        img_alt="Teste"
        text="FRETE GRÁTIS"
      />
      <UIIcon
        img_src={AgilityIcon}
        img_alt="Teste"
        text="AGILIDADE"
      />
      <UIIcon
        img_src={ConvenienceIcon}
        img_alt="Teste"
        text="COMODIDADE"
      />
      </footer>
  </div>
)

export default Login;
