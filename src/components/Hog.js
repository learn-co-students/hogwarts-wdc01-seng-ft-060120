import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Hog = (props) => {

    const hogImgURL = (hogName) => {
        let lowerCase = hogName.toLowerCase().replace(/ /g, "_")
        let url = require(`../hog-imgs/${lowerCase}.jpg`)
        return url
    }
    let colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"]


    let { name, greased, specialty, weight } = props.hog

    return(
        <Card color={colors[Math.floor(Math.random()*colors.length)]}>
            <Image src={hogImgURL(name)} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Weight: {weight} Tons</span>
                </Card.Meta>
                <Card.Description>
                    Specialty: {specialty}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Hog;