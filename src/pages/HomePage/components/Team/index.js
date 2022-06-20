import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../store/users/actions';

import './styles.scss';

const Team = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    const { loading, users } = useSelector((state) => state.Users);
    const memoizedUsers = useMemo(() => users, [users])

    useEffect(() => {
        dispatch(getUsers({page}))
    }, [dispatch, page])

    console.log(memoizedUsers);

    return (
        <section className="team-part">
            {loading ? 
                <div>Loading...</div>
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
                                            <span className="team-item-text">
                                                {position}
                                            </span>
                                            <span className="team-item-text">
                                                {email}
                                            </span>
                                            <span className="team-item-text">
                                                {phone}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {memoizedUsers.total_pages > page+1 ?
                            <button onClick={() => setPage(page+1)}>
                                Upgrade
                            </button>
                        :
                            <button>
                                Exceeded
                            </button>
                        }
                    </div>
                </>
            :
                <div>
                    No users found
                </div>
            }
        </section>
    )
}

export default Team