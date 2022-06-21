import { useState } from 'react'
import ApplyFormContainer from '../../../../components/Forms/ApplyForm/ApplyFormContainer'
import SuccessImage from '../../../../assets/SuccessImage.svg'
import './styles.scss'

const Apply = () => {
  const [formStatus, setFormStatus] = useState(false)
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
        <>
          <div className="text-heading b-87 nunito text-center part-heading">
            Working with POST request
          </div>
          <ApplyFormContainer setFormStatus={setFormStatus} />
        </>
      }
    </section>
  )
}

export default Apply