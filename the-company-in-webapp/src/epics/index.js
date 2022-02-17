import { combineEpics } from 'redux-observable';
import fetchDomainData from "./fetchDomainData";

export default combineEpics(
    fetchDomainData
);
