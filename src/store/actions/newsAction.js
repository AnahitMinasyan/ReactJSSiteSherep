import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';
import axios from 'axios'


export const fetchNewsSuccess = (news) => {
    return {
        type: actionTypes.FETCH_NEWS_SUCCESS,
        news: news,


    }
};

export const fetchNewsFail = (error) => {
    return{
        type: actionTypes.FETCH_NEWS_FAIL,
        error: error
    }
};

export const fetchNewsStart = () => {
    return{
        type: actionTypes.FETCH_NEWS_START
    };
};

export const fetchNewsItemStart = () => {
    return {
        type: actionTypes.FETCH_NEWS_ITEM_START
    };
};

export const fetchNewsItemSuccess = (newsItem) => {
    return {
        type: actionTypes.FETCH_NEWS_ITEM_SUCCESS,
        newsItem: newsItem
    };
};

export const fetchNewsItemFail = (error) => {
    return {
        type: actionTypes.FETCH_NEWS_ITEM_FAIL,
        error: error
    };
};



export const fetchNews = () => {
        return dispatch => {
            dispatch(fetchNewsStart());

            axios.post('https://sherepsite-project.firebaseio.com/news.json')
                .then(response => {
                    dispatch(fetchNewsSuccess(response.data.news, response.data.count));
                })
                .catch(error => {
                    dispatch(fetchNewsFail());
                });
             }
        };


    export const fetchNewsItem = (slug) => dispatch => {
        dispatch(fetchNewsItemStart());
        axios.get('/news/' + slug)
            .then(response => {
                dispatch(fetchNewsItemSuccess(response.data.newsItem));
            })
            .catch(error => {
                dispatch(fetchNewsItemFail());
            });
    };







