import axios from 'axios';

const getProfile = () => {
        return axios.get('https://www.codewars.com/api/v1/users/OwenInTraining')
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.log(err)
        })
}

export default getProfile;