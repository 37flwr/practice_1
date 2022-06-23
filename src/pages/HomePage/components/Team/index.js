import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../store/users/actions';
import Button from '../../../../components/Buttons/Button'
import TeamCard from './components/TeamCard';
import Loader from '../../../../components/Loader';
import './styles.scss';

const Team = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const { loading, users } = useSelector((state) => state.Users);
    const memoizedUsers = useMemo(() => users, [users])

    useEffect(() => {
        dispatch(getUsers({page}))
    }, [dispatch, page])

    return (
        <section className="team-part">
            <span className="section-heading text-heading nunito">
                Working with GET request
            </span>
            {loading ? 
                <Loader />
            :
                memoizedUsers?.users?.length > 0 ?
                    <div className="team-container">
                        <div className="team-items-grid">
                            {memoizedUsers.users.map(({ id, photo, name, position, email, phone }) => (
                                <TeamCard 
                                    id={id} 
                                    photo={photo} 
                                    name={name} 
                                    position={position} 
                                    email={email} 
                                    phone={phone}
                                />
                            ))}
                        </div>
                        {memoizedUsers.total_pages > page+1 ?
                            <Button onClick={() => setPage(page+1)} width='great' loading={loading}>
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