import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../store/users/actions';
import Button from '../../../../components/Buttons/Button'
import TeamCard from './components/TeamCard';
import Loader from '../../../../components/Loader';
import './styles.scss';

const Team = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch()
    const { loading, users } = useSelector((state) => state.Users);
    const memoizedUsers = useMemo(() => users, [users])
    
    useEffect(() => {
        dispatch(getUsers({currentPage}))
    }, [dispatch, currentPage])

    return (
        <section className="team-part">
            <span className="section-heading text-heading nunito b-87 text-center">
                Working with GET request
            </span>
            {loading ? 
                <Loader />
            :
                memoizedUsers?.users?.length > 0 ?
                    <div className="team-container">
                        <div className="team-cards-grid">
                            {memoizedUsers.users.map(({ id, photo, name, position, email, phone }) => (
                                <TeamCard 
                                    id={id} 
                                    photo={photo} 
                                    name={name} 
                                    position={position} 
                                    email={email} 
                                    phone={phone}
                                    key={id}
                                />
                            ))}
                        </div>
                        {memoizedUsers.total_pages > currentPage ?
                            <Button onClick={() => setCurrentPage(currentPage+1)} width='great' loading={loading}>
                                Show more
                            </Button>
                        :
                            <Button disabled width='great'>
                                Show more
                            </Button>
                        }
                    </div>
                :
                    <div className="text-body nunito">
                        No users found
                    </div>
            }
        </section>
    )
}

export default Team