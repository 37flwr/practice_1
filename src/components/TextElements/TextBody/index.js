import classnames from 'classnames';
import './styles.scss';

const TextBody = ({value, customClassName}) => (
   <span className={classnames(`text-body-span b-87 nunito text-body text-center`, customClassName)} title={value}>
        {value}
    </span>
)

export default TextBody