import React from 'react';
import classes from './NewsList.css';
import NewsSummary from "./NewsSummary/NewsSummary";
import {Link} from "react-router-dom";

const NewsList = (props) => {
    return (



        <div className={classes.NewsList}>
        {props.news && props.news.map(newsItem =>{
            return (
                <Link to={'/news/' + newsItem.id} key={newsItem.id}>
                    <NewsSummary key={newsItem.id} newsItem={newsItem} />
                </Link>
            )
        })}

        </div>
    );
};

export default NewsList;