import { useEffect, useState } from "react";
import getProfile from "../api/getProfile";

const Codewars = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile()
            .then((res)=> {
                setData(res.data)
                console.log(res.data)
                setLoading(false);
            })
    },[])


    if(loading === false){
        return (
            <>
            <div className='footerCard'>
                <h3><b>Check out my Codewars Stats:</b></h3>
                <p id='codewarsText'>This uses axios, useEffect, and useState to call the Codewars api and then render the data so it should be pretty up to date. </p>
                <h3>Username: <a href='https://github.com/ajknowlden1/birds-i-view'>{data.username}</a> </h3>
                <h3>Leaderboard Rank: <b>{data.leaderboardPosition}</b></h3>
                <h3>Honor: <b>{data.honor}</b></h3>
                <h3>Katas Completed:<b> {data.codeChallenges.totalCompleted}</b></h3>
                <h3>Javascript: <b>{data.ranks.languages.javascript.name}</b> </h3>
                <h3>Python: <b>{data.ranks.languages.python.name}</b> </h3>
            </div>
            </>
        )
    }

}

export default Codewars