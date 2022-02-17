import {SET_DOMAIN_DATA, FETCH_DOMAIN_DATA} from "../actions/domainActions";
import update from 'immutability-helper';

const INITAIL_STATE = {
    domainsData: {},
    isLoadingDomains: []
}

const dataReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case FETCH_DOMAIN_DATA: {
            return update(state, {isLoadingDomains: {$push: [action.payload.domain]}});
        }
        case SET_DOMAIN_DATA: {
            const {data} = action.payload;
            return update(state, {domainsData: {$merge: {[data.domain]: data}}});
        }
        default: {
            return state;
        }
    }
}

export default dataReducer;
