import Loader from '../../../components/Loader'
import './styles.scss'

const Button = ({ children, disabled, loading, width, customClass, onClick }) => {
  return (
    <>
        {loading ? 
            <Loader />
        :
        disabled ?
            <button disabled className={`button ${width}-width nunito ${customClass} disabled text-body`} >
                {children}
            </button>
            :
            onClick ?
                <button onClick={() => onClick()} className={`button ${width}-width nunito ${customClass} text-body`} type='submit'>
                    {children}
                </button>
                :
                <button className={`button ${width}-width nunito ${customClass} text-body`} type='submit' >
                    {children}
                </button>
        }
    </>
  )
}

export default Button