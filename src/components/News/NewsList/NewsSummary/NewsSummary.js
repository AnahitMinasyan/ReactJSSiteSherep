import React from 'react';
import classes from './NewsSummary.css';
import classes1 from "../../../Media/MediaSummary/MediaList.css";
import {Link} from "react-router-dom";

const NewsSummary = (props) => {
    return (
            <article className={classes.NewsContent} onClick={props.clicked}>
                <p className={classes.NewsData}>{props.date}</p>
                <h3>{props.title}</h3>
                <p className={classes.NewsSummaryText}>
                    {props.content}
                </p>
                <Link  to={props.link}>Details...</Link>
            </article>
    );
};

export default NewsSummary;