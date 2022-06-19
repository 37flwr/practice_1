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
        memoizedUsers.data.users.length > 0 ?
            memoizedUsers.data.users.map(() => (
                <div className="user-box">
                    1
                </div>
            ))
        :
            <div>
                2
            </div>
        }
    </section>
  )
}

export default Team