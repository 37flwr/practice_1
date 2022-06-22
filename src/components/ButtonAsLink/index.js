import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss';

const ButtonAsLink = ({ children, path, disabled, loading, width, customClass }) => {
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
                <Link to={path} className={`button ${width}-width nunito ${customClass} text-body`} >
                    {children}
                </Link>
            }
        </>
    )
}

export default ButtonAsLink