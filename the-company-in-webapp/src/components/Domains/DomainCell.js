import React from 'react';
import {FaSpinner} from 'react-icons/fa'


const DomainCell = ({attribute}) => (
    <div>
    {attribute ? attribute : (<FaSpinner/>)}
    </div>
)

export default DomainCell;
