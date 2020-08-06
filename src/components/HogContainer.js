import React from 'react';
import Hog from './Hog';
import { Card } from 'semantic-ui-react';

const HogContainer = (props) => {

    const renderHogs = () => {
        return(props.hogs.map(hog => <Hog hog={hog}/>))
    }

    return(
        <Card.Group itemsPerRow={4} id="hog-container">
            {renderHogs()}
        </Card.Group>
    )
}

export default HogContainer;