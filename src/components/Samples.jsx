import lights from '../images/lights.gif';
import ncNews from '../images/ncNews.png';

const Samples = () =>{
    return (
        <>
        <div className='content' id='Samples'>
            <h2>Samples of my work:</h2>
            <h2>Nc-News - A Backend News Server API</h2>
            <img className='samplePics' id='ncNewsPic' src={ncNews} alt='a small clipping of API json output from a news server'></img>
            <p>This was my backend project for the Northcoders skilled bootcamp. This project involved using Node and pSQL to make a functional news server API, allowing the user to view articles and topics as well as post comments and view information about the author. This project was the foundation for my front end project, Tabloid Filter, which can be seen below.</p>
            <a href='https://github.com/OwenPortfolio/be-nc-news'>Check out the github repo.</a>
            <p></p>
            <a href='https://owen-news.herokuapp.com/api'>Explore the test implementation hosted on Heroku</a>
            <p></p>
            <h2>Lights Owen</h2>
            <img className='samplePics' id='lightsPic' src={lights} alt='an animation of the games lights out being played'></img>
            <p>A recreation of the 1995 Tiger Electronics game, Lights Out, in React. This was created in a few days for a solo sprint during my time at bootcamp. Clicking the lights will turn them on or off, but will also flick a number of adjacent lights depending on difficulty. The goal is to turn all the lights off at the same time. This was a challenging project because it involved working with basic game logic, but also keeping the front end in mind at all times as the visible arrangement of elements is crucial to the functioning of the game.</p>
            <a href='https://github.com/OwenPortfolio/lights-out'>Check out the github repo.</a>
            <p></p>
            <a href='https://lights-owen.herokuapp.com/'>Play the game for yourself!</a>
        </div>
        </>
    )
}

export default Samples;