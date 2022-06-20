import React from 'react'
import IconLogo from '../../../assets/Logo.svg';
import ButtonAsLink from '../../ButtonAsLink';
import './styles.scss';

const Header = () => (
  <section className='header'>
      <div className='header-container'>
          <img src={IconLogo} alt="Testtask logo" className='header-logo' />
          <div className='header-buttons'>
              <ButtonAsLink path="/" width='standard'>
                Users
              </ButtonAsLink>
              <ButtonAsLink path="/" width='standard'>
                Sign up
              </ButtonAsLink>
          </div>
      </div>
  </section>
)

export default Header