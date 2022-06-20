import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../store/users/actions';
import Button from '../../../../components/Button'

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
            <span className="text-heading nunito">
                Working with GET request
            </span>
            {loading ? 
                <div className="text-body nunito">Loading...</div>
            :
                memoizedUsers.users.length > 0 ?
                    <>
                        <div className="team-container">
                            <div className="team-items-grid">
                                {memoizedUsers.users.map(({ id, photo, name, position, email, phone }) => (
                                    <div className="team-item">
                                        <div className="team-item-container" key={id}>
                                            <img src={photo} alt="" className="team-item-img" />
                                            <div className="team-item-heading nunito">
                                                <span>
                                                    {name}
                                                </span>
                                            </div>
                                            <div className="team-item-details">
                                                <span className="team-item-text nunito">
                                                    {position}
                                                </span>
                                                <span className="team-item-text nunito">
                                                    {email}
                                                </span>
                                                <span className="team-item-text nunito">
                                                    {phone}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {memoizedUsers.total_pages > page+1 ?
                                <Button onClick={() => setPage(page+1)} width='great'>
                                    Show more
                                </Button>
                            :
                                <Button disabled width='great'>
                                    Show more
                                </Button>
                            }
                        </div>
                    </>
                :
                    <div className="text-body nunito">
                        No users found
                    </div>
            }
        </section>
    )
}

export default Team