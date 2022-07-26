import {useEffect, useState} from 'react';
import getRecentCommit from '../api/getRecentCommit';

const Github = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [repo, setRepo] = useState('');
    const [commit, setCommit] = useState('');

    useEffect(() => {
        getRecentCommit()
            .then((res) => {
                setData(res.data[0])
                setRepo(`https://github.com/${data.repo.name}`)
                setLoading(false);

            })
    },[])

    if(loading === false){
        return (
            <>
            <div className='footerCard'>
                <h2><b>Check out my latest Github activity:</b></h2>
                <h3>Type: <b>{data.type}</b></h3>
                <h3>Date: <b>{data.created_at}</b></h3>
                <h3>Message: <b>{data.payload.commits[0].message}</b></h3>
                <h3>Repo: <b>{data.repo.name}</b></h3>
                <h2><a href={repo}>Visit this Repo</a></h2>
            </div>
            </>
        )
    }
}

export default Github;