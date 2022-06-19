import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss';

const Button = ({ text, path, disabled, loading, width, customClass }) => {
    console.log(customClass, disabled);
    return (
        <>
            {loading ? 
                <div className='nunito'>
                    loading
                </div>
            :
            disabled ?
                <button disabled className={`button ${width}-width nunito ${customClass} disabled text-body`} >
                    {text}
                </button>
                :
                <Link to={path} className={`button ${width}-width nunito ${customClass} text-body`} >
                    {text}
                </Link>
            }
        </>
    )
}

export default Button