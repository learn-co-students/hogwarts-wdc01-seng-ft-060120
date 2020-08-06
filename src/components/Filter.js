import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
    { key: 1, text: 'Greased', value: true },
    { key: 2, text: 'Ungreased', value: false },
]

const Filter = () => {
    return(
        <Dropdown options={options} />
    )
}

export default Filter;