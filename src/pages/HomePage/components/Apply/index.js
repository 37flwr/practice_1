import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPositions } from '../../../../store/actions'
import ApplyFormContainer from '../../../../components/Forms/ApplyForm/ApplyFormContainer'
import SuccessImage from '../../../../assets/SuccessImage.svg'
import './styles.scss'

const Apply = () => {
  const [formStatus, setFormStatus] = useState(false)
  const dispatch = useDispatch()
  const { loading, positions } = useSelector((state) => state.Positions)
  const memoizedPositions = useMemo(() => positions, [positions])
  
  useEffect(() => {
    dispatch(getPositions())
  }, [dispatch])

  return (
    <section className="apply-part">
      {formStatus?
        <>
          <div className="text-heading b-87 nunito text-center part-heading">
            User successfully registered
          </div>
          <img src={SuccessImage} alt="" className="apply-part-img" />
        </>
        :
        loading ?
          <div>Loading...</div>
          :
          <>
            <div className="text-heading b-87 nunito text-center part-heading">
              Working with POST request
            </div>
            <ApplyFormContainer setFormStatus={setFormStatus} positions={memoizedPositions} />
          </>
      }
    </section>
  )
}

export default Apply