import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";



export const initialState = {
    news: {
        news: [],
        newsItem: null,
        loading: false,
    },

    newsItem: {
        newsItem: null,

        loading: false,
        error: false,
    },

};
const fetchNewsStart = (state = [], action) => {
    return updateObject(state, {
        news: {
            loading: true
        }
    });

};

const fetchNewsSuccess = (state, action) => {
    return updateObject(state, {
        news: {
            news: action.news,
            // count: action.count,
            loading: false
        }
    });
};

const fetchNewsFail = (state, action) => {
    return updateObject(state, {
        news: {
            loading: false
        }

    });
};

const fetchNewsItemStart = ( state, action ) => {
    return updateObject( state, {
        newItem: {
            loading: true
        }
    } );
};

const fetchNewsItemSuccess = ( state, action ) => {
    return updateObject( state, {
        newItem: {
            newItem: action.newItem,
            loading: false
        }
    } );
};

const fetchNewsItemFail = ( state, action ) => {
    return updateObject( state, {
        newItem: {
            loading: false,
            error: true
        }
    } );
};





const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_START:
            return fetchNewsStart(state, action);
        case actionTypes.FETCH_NEWS_SUCCESS:
            return  fetchNewsSuccess(state, action);
        case actionTypes.FETCH_NEWS_FAIL:
            return fetchNewsFail(state, action);

        case actionTypes.FETCH_NEWS_ITEM_START:
            return fetchNewsItemStart( state, action );
        case actionTypes.FETCH_NEWS_ITEM_SUCCESS:
            return fetchNewsItemSuccess( state, action );
        case actionTypes.FETCH_NEWS_ITEM_FAIL:
            return fetchNewsItemFail( state, action );


        default: return state;
    }
};
export default reducer;