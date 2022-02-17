import React from 'react';
import './Domains.css'
import _ from 'lodash'
import DomainCell from "./DomainCell";


const DomainsGrid = ({domains, metaData}) =>
    (<div className='domains-container'>
            <div className='domain-header'>Logo</div>
            <div className='domain-header'>Domain</div>
            <div className='domain-header'>Type</div>

        {_.map(domains, (domain) => {
            const {type, logo} = metaData[domain] || {};
            return (<>
                    <DomainCell attribute={logo}/>
                    <DomainCell attribute={domain}/>
                    <DomainCell attribute={type}/>
                </>)
            })
        }
    </div>)

DomainsGrid.defaultProps = {
    domains: [],
    metaData: {}
}

export default DomainsGrid;
