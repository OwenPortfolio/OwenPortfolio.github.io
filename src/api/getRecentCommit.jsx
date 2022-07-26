import axios from 'axios';

const getRecentCommit = () => {
    return axios.get('https://api.github.com/users/OwenPortfolio/events/public')
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.log(err)
        })
}

export default getRecentCommit;