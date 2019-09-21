import React, {Component} from 'react';
import classes from "../MenuPage/MenuPage.css";
import MenuImg from "../../assets/images/shere-6.png";
import Slider from "../PagesFunctions/Slider/Slider";
import MenuNavigation from "../../components/Menu/MenuNavigation/MenuNavigation";
import MenuButtons from "../../components/Menu/MenuButtons/MenuButtons";
import MenuList from "../../components/Menu/MenuList/MenuList";
import axios from "../../axios-orders";

class MenuPage extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        // axios.post('https://sherepsite-project.firebaseio.com/menu.json', {
        //     category: 'banquet',
        //     title: 'Banquet-Title5',
        //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     price: '5000'
        // }).then(res => {
            axios.get('https://sherepsite-project.firebaseio.com/menu.json/').then(res => {
                let newData = res.data;
                let newNames = [];
                for (let key in newData) {
                    newNames.push(newData[key])
                }
                this.setState({data: newNames})
            })
        // })
    }
    render() {
        return (

            <div className={classes.MenuPage}>
                    <div className={classes.MenuPageBack}>
                        <img src={MenuImg} alt=""/>
                    </div>

            <div className={classes.MenuPageList}>
                     <h1>Menu</h1>
                <MenuNavigation/>
                <MenuButtons/>
                <MenuList/>
            </div>

        </div>
        );
    }
}

export default MenuPage;