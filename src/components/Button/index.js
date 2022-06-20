import React from 'react'
import './styles.scss'

const Button = ({ children, disabled, loading, width, customClass, onClick }) => {
  return (
    <>
        {loading ? 
            <div className='nunito'>
                loading
            </div>
        :
        disabled ?
            <button disabled className={`button ${width}-width nunito ${customClass} disabled text-body`} >
                {children}
            </button>
            :
            <button onClick={() => onClick()} className={`button ${width}-width nunito ${customClass} text-body`} >
                {children}
            </button>
        }
    </>
  )
}

export default Button