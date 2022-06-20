import React from 'react'
import IconLogo from '../../../assets/Logo.svg';
import Button from '../../Button';
import './styles.scss';

const Header = () => {
  return (
    <section className='header'>
        <div className='header-container'>
            <img src={IconLogo} alt="Testtask logo" className='header-logo' />
            <div className='header-buttons'>
                <Button path="/" text="Users" width="standard" />
                <Button path="/" text="Sign up" width="standard" />
            </div>
        </div>
    </section>
  )
}

export default Header