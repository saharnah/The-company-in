import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import './Form.css'
import 'react-toastify/dist/ReactToastify.css';
import Input from "../Input/Input";
import {GrAdd} from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import {fetchDomainData} from "../../actions/domainActions";
import DomainsGrid from "../Domains/DomainsGrid";


const Form = () => {
    const [domainInput, setDomainInput] = useState('');
    const [domains, setDomains] = useState([]);
    const dispatch = useDispatch()
    const domainsData = useSelector((state) => state.dataReducer.domainsData)


    const handleOnClickDomain = () => {
        if (!_.find(domains, d => d === domainInput)) {
            setDomains([...domains, domainInput])
        }
    }

    useEffect(() => {
        if(!_.isEmpty(domainInput)) {
            dispatch(fetchDomainData(domainInput));
        }
    }, [domains])

    return (<form className='form-container'>
        <div className='form-header'>
            <Input placeholder='Type certain domain' onChange={e => setDomainInput(e.target.value)} />
            <GrAdd className='add-icon' onClick={handleOnClickDomain}/>
        </div>
        <div className='form-body'>
            <DomainsGrid domains={domains} metaData={domainsData}/>
        </div>
    </form>)
}
export default Form;
