import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPositions } from '../../../../store/actions'
import ApplyFormContainer from '../../../../components/Forms/ApplyForm/ApplyFormContainer'
import SuccessImage from '../../../../assets/SuccessImage.svg'
import './styles.scss'

const Apply = () => {
  const dispatch = useDispatch()
  const { loading, positions } = useSelector((state) => state.Positions)
  const { formStatus, response } = useSelector((state) => state.Apply)

  const memoizedPositions = useMemo(() => positions, [positions])
  
  useEffect(() => {
    dispatch(getPositions())
  }, [dispatch])

  const [localFormStatus, setLocalFormStatus] = useState(false)

  return (
    <section className="apply-part">
      {localFormStatus && formStatus ?
        <>
            <div className="text-heading b-87 nunito text-center part-heading">
              User successfully registered
            </div>
            <img src={SuccessImage} alt="" className="apply-part-img" />
        </>
        :
        loading ?
          <div>
            Loading...
          </div>
          :
          <>
            <div className="text-heading b-87 nunito text-center part-heading">
              Working with POST request
            </div>
            <ApplyFormContainer setLocalFormStatus={setLocalFormStatus} positions={memoizedPositions} />
            {response.response?.data?.message}
          </>
      }
    </section>
  )
}

export default Apply