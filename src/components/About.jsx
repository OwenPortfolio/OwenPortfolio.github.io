import profilePic from '../images/profilePic.jpeg';

const About = ()=> {
    return (
        <>
        <div className='content' id='About'>
            <h2><b>Who am I?</b></h2>
            <img className='pictures' id='profilePic' src={profilePic} alt='portrait photo of a bald man with beard and glasses'></img>
            <p>Hi, my name is Owen and I am looking for my first junior software developer role.
                In April 2022 I was accepted on to the Northcoders Skills Bootcamp as part of their excellence scholarship and began training as a full stack developer.
                As part of the bootcamp I worked primarily in Javascript, and worked with technologics liked PSQL, React, NodeJs, and other relevant professional tools.
                A full breakdown can be found below. I loved the course, and I love making small apps in React, some of which are showcased on my samples page. 
            </p>
            <p>
                I have been trained using industry standard practices for readable, clean code, as well as agile working practices. I really enjoy pair programming and 
                working with others to solve problems and I'm particuarly proud of the final project my team and I put together, a mobile app that visualises data about bird
                sightings across the UK.
            </p>
            <p>
                In my spare time, my hobby is learning new skills. When I'm not coding I enjoy language learning, reading French comics, and tinkering with old computers.
                Lately I've been working on a project with a friend to recreate a Sinclair ZX81 using all modern components, and should have some info on this soon. I really enjoy video games, though that isn't the area of tech I'd like to work in. I'm more interested in projects that will solve the impending societal problems we face, such as climate change or mental health care. 
            </p>
            <h2><b>Technical Skills:</b></h2>
            <p>Programming Languages: JavaScript, some TypeScript</p>
            <p>Libraries and other tech used on the Bootcamp: Git and Github, NodeJS, PSQL, Express, Jest, Supertest, Heroku, React, React Native, Firebase, Google Maps API and other public APIs</p>
            <p>Skills and Practices: Agile methods, included pair programming, sprints, stand-ups, and test driven development. A focus on functional programming, with 
                weeks on Object Oriented Programming and alternative approaches. 
            </p>
            <p>Self Taught and Personal Development since Bootcamp Graduation: I am currently learning Python in my development time.</p>
        </div>
        </>
    )
}

export default About;