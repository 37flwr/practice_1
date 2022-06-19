import './styles.scss';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../store/users/actions';

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
                {memoizedUsers.users.map(({ id, photo, name, position, email, phone }) => (
                    <div className="team-item">
                        <div className="team-item-container" key={id}>
                            <img src={photo} alt="" className="team-item-img" />
                            <span className="team-item-heading">
                                {name}
                            </span>
                            <div>
                                <span>
                                    {position}
                                </span>
                                <span>
                                    {email}
                                </span>
                                <span>
                                    {phone}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                {memoizedUsers.total_pages > page+1 ?
                    <button onClick={() => setPage(page+1)}>
                        Upgrade
                    </button>
                :
                    <button>
                        Exceeded
                    </button>
                }
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