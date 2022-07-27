import {useEffect, useState} from 'react';
import getRecentCommit from '../api/getRecentCommit';

const Github = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [repo, setRepo] = useState('');
    useEffect(() => {
        getRecentCommit()
            .then((res) => {
                setData(res.data[0])
                setRepo(`https://github.com/${data.repo.name}`)
                setLoading(false);

            })
    },[data])

    if(loading === false){
        return (
            <>
            <div className='footerCard'>
                <h3><b>Check out my latest Github activity:</b></h3>
                <h3>Data via API...</h3>
                <h3>Type: <b>{data.type}</b></h3>
                <h3>Date: <b>{data.created_at.slice(0,10)}</b></h3>
                <h3>Repo: <b>{data.repo.name}</b></h3>
                <h3>Message: <b>{data.payload.commits[0].message}</b></h3>
                <h3><a href={repo}>Visit this Repo</a></h3>
            </div>
            </>
        )
    }  else {
        return (
            <>
            <h1>Loading...</h1>
            </>
        )
    }
}

export default Github;