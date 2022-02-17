import {
    FETCH_DOMAIN_DATA,
    setData,
    fetchDataFailed
} from "../actions/domainActions";
import { of, EMPTY } from 'rxjs';
import {ofType} from 'redux-observable';
import _ from 'lodash';
import {mergeMap, map, catchError} from "rxjs/operators";
import { toast } from 'react-toastify';
import axios from "./../axios/axios";

const fetchDomainData = (actions$) => {
    return actions$.pipe(
        ofType(FETCH_DOMAIN_DATA),
        mergeMap((action) => {
            const {domain} = action.payload;
            if(_.isEmpty(domain)) {
                return EMPTY;
            }
            return axios.get(`/domain?name=${domain}`)
            .pipe(
                map(({data}) => {
                    return setData(data);
                }),
                catchError((err) => {
                    toast.error('something went wrong :(')
                    return of(fetchDataFailed());
                })
            );
        })
    );
}

export default fetchDomainData;
