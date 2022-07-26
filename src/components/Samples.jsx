import lights from '../images/lights.gif';
import ncNews from '../images/ncNews.png';
import tabloid from '../images/tabloidFilter.png';
import birds2 from '../images/birds2.png';

const Samples = () =>{
    return (
        <>
        <div className='content' id='Samples'>
            <h2 className='sampleText'><b>Birds-I-View - A birdspotting data visualisation app</b></h2>
            <img className='samplePics' id='birds2' src={birds2} alt='an app showing a heatmap of bird sightings across the'></img>
            <p className='sampleText'>Birds-I-View is an Android and iOS app, created in React Native and Expo, and was written in typescript due to possible conflicts involved in pulling so much data from different APIs. It uses data about British birds from the eBird API to provide show the user a list of sightings in their area for any native British bird. Individual species can be looked up, as well as all bird sightings in your region. It uses Firebase for accounts, allowing you to log in, track your sightings and create a wishlist of birds. It uses the GoogleMaps API to show you a heat map of sightings, letting you see at a glance what part of the country is best for what sightings. It also pulls information from a Wikipedia API, allowing you to pull up a picture and description for each bird species. 
            </p>
            <p className='sampleText'>This was a group project, I worked as part of a team of four. My focus was primarily on the Google Maps API and heatmap code, but all members of the team worked on all aspects of the app at different points in time. There is no permanently deployed version of this app as the Google Maps API comes with costs, but the repo can be explored below.</p>
            <a className='sampleText' href='https://github.com/ajknowlden1/birds-i-view'>Check out the github repo.</a>
            <h1 className='sampleText'>* * *</h1>
            <h2 className='sampleText'><b>Nc-News - A Backend News Server API</b></h2>
            <img className='samplePics' id='ncNewsPic' src={ncNews} alt='a small clipping of API json output from a news server'></img>
            <p className='sampleText'>This was my backend project for the Northcoders skilled bootcamp. This project involved using Node and pSQL to make a functional news server API, allowing the user to view articles and topics as well as post comments and view information about the author. This project was the foundation for my front end project, Tabloid Filter, which can be seen below.</p>
            <a className='sampleText' href='https://github.com/OwenPortfolio/be-nc-news'>Check out the github repo.</a>
            <p></p>
            <a className='sampleText' href='https://owen-news.herokuapp.com/api'>Explore the test implementation hosted on Heroku</a>
            <h1 className='sampleText'>* * *</h1>
            <h2 className='sampleText'><b>Tabloid Filter - News Server Front-End</b></h2>
            <img className='samplePics' id='tabloid' src={tabloid} alt='a news site displaying a short article and a display comments button'></img>
            <p className='sampleText'>Tabloid Filter was my front end project and one of the last big pieces of solo work I did for the bootcamp before our final project as a team. This was the project where I really started to find my feet with software development, and gain a little more confidence with making more ambitious choices. I was particularly pleased with choices made around displaying comments and hiding articles while the comment is displayed so that the styling remained clean and presentable on mobile.</p>
            <a className='sampleText' href='https://github.com/OwenPortfolio/FE-nc-news'>Check out the github repo.</a>
            <p></p>
            <a className='sampleText' href='https://tabloid-filter.herokuapp.com/'>Explore the test implementation hosted on Heroku</a>
            <h1 className='sampleText'>* * *</h1>
            <h2 className='sampleText'><b>Lights Owen</b></h2>
            <img className='samplePics' id='lightsPic' src={lights} alt='an animation of the games lights out being played'></img>
            <p className='sampleText' >A recreation of the 1995 Tiger Electronics game, Lights Out, in React. This was created in a few days for a solo sprint during my time at bootcamp. Clicking the lights will turn them on or off, but will also flick a number of adjacent lights depending on difficulty. The goal is to turn all the lights off at the same time. This was a challenging project because it involved working with basic game logic, but also keeping the front end in mind at all times as the visible arrangement of elements is crucial to the functioning of the game.</p>
            <a className='sampleText' href='https://github.com/OwenPortfolio/lights-out'>Check out the github repo.</a>
            <p></p>
            <a className='sampleText' href='https://lights-owen.herokuapp.com/'>Play the game for yourself!</a>
            <h1 className='sampleText'>* * *</h1>
            <p></p>
        </div>
        </>
    )
}

export default Samples;