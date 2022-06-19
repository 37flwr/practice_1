import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss';

const Button = ({ text, path, disabled, loading, width }) => {
    return (
        <>
            {loading ? 
                <div className='nunito'>
                    loading
                </div>
            :
                <Link to={path} disabled={disabled} className={`button ${width}-width nunito`}>
                    <div className='button-container'>
                        {text}
                    </div>
                </Link>
            }
        </>
    )
}

export default Button