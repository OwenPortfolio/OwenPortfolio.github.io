import Hire from '../components/Hire'
import About from '../components/About'
import Samples from '../components/Samples'

const Body = (props)=> {

    if(props.page === 'default'){
        return <About/>
    }
    if(props.page === 'About'){
        return <About/>
    }
    if(props.page === 'Samples'){
        return <Samples/>
    }
    if(props.page === 'Hire'){
        return <Hire/>
    }

}

export default Body;