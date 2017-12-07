import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Grid, Container, Segment } from 'semantic-ui-react';

import NavigationHeader from '../components/NavigationHeader';

const renderText = () => {
    return (
        <div>
            <p>We are a group of students studying at The University of Melbourne who possess a drive towards social change, and the idea for this web-app came to us during a hackathon. The organizer of the hackathon is the computing students’ society, CISSA (Computing and Information Systems Student Association) , based in our university.</p>
            <br/>
            <p>Do note that this web-app is merely an idea, and it has not been utilized by real users.</p>
            <br/>
            <p>We had to choose one issue from the three challenges which are discussed by the Mornington Peninsula Shire : housing, transport and mental health. Please note that Mornington Peninsula is far away from a nearby city like Melbourne.</p>
            <br/>
            <p>The problem that we are trying to solve is this : </p>
            <ol>
                <li>There are a number of elderly people in Frankson (a region in Mornington Peninsula which is the closest region to public transport access to the city) who are living alone in a house with vacant rooms. Due to the accessibility of Frankston, the cost of rent is quite high in Frankston.</li>
                <br/>
                <li>There are teenagers of around age 17-25 who are still living with their families (many Western families expect their children to be able to live on their own after the age of 17) as the cost of rent can be high. Some of these teenagers are living in the regions further away from the city in Mornington Peninsula. Consequently, after completing Year 12 (their final secondary school level), these teenagers are less inclined to pursue their tertiary education. Considering most of the universities are found in the city, these students not living in Frankston will have transport issues. Hence, there are teenagers in Mornington Peninsula who are at risk of stunting their education growth.</li>
            </ol>
            <br/>
            <p>Our solution is :</p>
            <br/>
            <p>We aim to match the elderly people living alone (home-owners) with the possible teenagers (or students) looking for homes equipped with easy transportation access (home-tenants).</p>
            <br/>
            <p>From the students’ perspective, they want a cheap rent, and they are energetic enough to perform chores.</p>
            <br/>
            <p>From the elderly people’s perspective, they do not care about the rent as much; they want someone to accompany them (as they are living alone), and they might need someone to help out with their chores.</p>
            <br/>
            <p>Consequently, a student can adjust the weekly rent rate by choosing the chores he or she is willing to help with. The student gets a cheaper rent in return for doing those chores, and the elderly person gets sufficient rent money, gets someone to help him or her out with the chores, and a company in the house. We believe that this ‘barter system’ can solve the issues faced by each party.</p>
            <br/>
            <Link to='/' className="ui primary button">Back to home</Link>
            <br/>
            <br/>
        </div>
    )
}

export default class AboutUs extends Component {
    render () {
        return (
            <Container>
                <NavigationHeader />
                <Divider />
                <Segment basic>
                    {renderText()}
              </Segment>
            </Container>
        )
    }
}