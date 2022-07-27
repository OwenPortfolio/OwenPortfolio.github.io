import ToffeePic from '../images/Toffee.png'

const Toffee = () => {
    return (
        <>
        <div className='footerCard'>
            <h3><b>My Cat Toffee:</b></h3>
            <h3>Data not via API...</h3>
            <img id='toffeePic' src={ToffeePic} alt='tortoiseshell cat in a yellow collar looking ahead against a brick wall'></img>
        </div>
        </>
    )
}

export default Toffee;