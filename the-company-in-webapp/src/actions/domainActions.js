export const FETCH_DOMAIN_DATA = '@TheCompanyIn/FETCH_DOMAIN_DATA';
export const FETCH_DOMAIN_DATA_FAILED = '@TheCompanyIn/FETCH_DOMAIN_DATA_FAILED';
export const SET_DOMAIN_DATA = '@TheCompanyIn/SET_DOMAIN_DATA';

export const fetchDomainData = (domain) => ({type: FETCH_DOMAIN_DATA, payload: {domain}});
export const setData = (data) => ({type: SET_DOMAIN_DATA, payload: {data}});
export const fetchDataFailed = () => ({type: FETCH_DOMAIN_DATA_FAILED, payload: {}});
