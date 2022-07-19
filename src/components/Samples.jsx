import lights from '../images/lights.gif';


const Samples = () =>{
    return (
        <>
        <div className='Samples'>
            <h3>Samples of my work:</h3>
            <img className='pictures' id='lightsPic' src={lights} alt='an animation of the games lights out being played'></img>
            <h3>Lights Owen</h3>
            <p>A recreation of the 1995 Tiger Electronics game, Lights Out, in React. This was created in a few days for a solo sprint during my time at bootcamp. Clicking the lights will turn them on or off, but will also flick a number of adjacent lights depending on difficulty. The goal is to turn all the lights off at the same time. This was a challenging project because it involved working with basic game logic, but also keeping the front end in mind at all times as the visible arrangement of elements is crucial to the functioning of the game.</p>
            <a href='https://github.com/OwenPortfolio/lights-out'>Check out the github repo.</a>
            <p></p>
            <a href='https://lights-owen.herokuapp.com/'>Play the game for yourself!</a>
        </div>
        </>
    )
}

export default Samples;