import React from 'react';
import classes from './SearchLanguage.css';
import DropDownLanguage from "../../../../container/PagesFunctions/DropDownLanguage/DropDownLanguage";

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'





const SearchLanguage = () => {
    return (
        <div className={classes.SearchLanguage}>
            <div >

                <p>Search</p>
            </div>

            <div>
                <DropDownLanguage/>
            </div>


        </div>
    );
};

export default SearchLanguage;