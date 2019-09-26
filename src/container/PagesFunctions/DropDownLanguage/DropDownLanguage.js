import React, {Component} from 'react';
import DropDownLink from "../../../components/Navigation/NavigationItems/SearchLanguage/DropDownLink/DropDownLink";
import classes from './DropDownLanguage.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import DropDownItems from "../../../components/Navigation/NavigationItems/SearchLanguage/DropDownLink/DropDownItems";

class DropDownLanguage extends Component {
    constructor() {
        super();

        this.dropdownLinks = {
            links: [
                {
                    link: 'english',
                    to: `/en/`
                },
                {
                    link: 'armenian',
                    to: `/hy/`,

                }
            ],
        }

        this.state = {
            showMenu: false,
            selectedLanguage: this.dropdownLinks.links[0]
        };

        this.showMenu = this.showMenu.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);

        });
    }

    setLanguage(language) {
        this.setState({selectedLanguage: language})
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target) || this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        let dropdownMenuShow = null;
        if (this.state.showMenu) {
            dropdownMenuShow = <div
                className={classes.dropdownMenu}
                ref={(element) => {
                    this.dropdownMenu = element;
                }}>
                {this.dropdownLinks.links.map(dropdownLink => (
                    <li>
                        <DropDownItems
                            onClick ={() => this.setLanguage(dropdownLink)}
                            href={dropdownLink.to}
                            linkText={dropdownLink.link}
                            key={dropdownLink.link}
                        />
                    </li>

                ))}
            </div>
        }
        return (
            <div className={classes.dropdownLanguage}>
                <button className={classes.dropdownToggleLanguage} type="button" id="dropdownMenuButton" onClick={this.showMenu.bind(this)}>
                    <FontAwesomeIcon icon={faAngleDown}/>
                    {this.state.selectedLanguage.link}
                </button>
                <ul>
                    {dropdownMenuShow}
                </ul>

            </div>
        );
    }
}



export default DropDownLanguage;