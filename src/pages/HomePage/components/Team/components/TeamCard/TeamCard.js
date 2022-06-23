import TextBody from '../../../../../../components/TextElements/TextBody';
import ImageNotFound from '../../../../../../assets/ImageNotFound.svg';
import './styles.scss';

const TeamCard = ({ photo, name, position, email, phone }) => (
    <div className="team-card">
        <div className="team-card-container">
            <img src={photo.slice(-15) !== 'placeholder.png' ? photo : ImageNotFound} alt="" className="team-card-img" />
            <div className="team-card-details">
                <TextBody value={name} customClassName='team-card-heading'/>
                <div className="team-card-contacts">
                    {[position, email, phone].map((value, idx) => <TextBody value={value} key={idx} />)}
                </div>
            </div>
        </div>
    </div>
)

export default TeamCard