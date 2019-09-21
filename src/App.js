import React, {Component} from 'react';
import NavigationBar from "./components/Navigation/NavigationBar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationItems from "./components/Navigation/NavigationItems/NavigationItems";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./container/HomePage/HomePage";
import AboutPage from "./container/AboutPage/AboutPage";
import GalleryPage from "./container/GalleryPage/GalleryPage";
import MenuPage from "./container/MenuPage/MenuPage";
import MediaEventsPage from "./container/MediaEventsPage/MediaEventsPage";
// import MediaDetails from "./components/Media/MediaDetails/MediaDetails";
import MediaEvent from "./container/MediaEventsPage/MediaEvent/MediaEvent";
import NewsPage from "./container/NewsPage/NewsPage";
import NewsDetails from "./container/NewsPage/NewsDetails/NewsDetails";
import CareerPage from "./container/CareerPage/CareerPage";
import ContactPage from "./container/ContactPage/ContactPage";




class App extends Component {
    render() {


        return (

            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/about'  component={AboutPage}/>
                        <Route path='/gallery' component={GalleryPage}/>
                        <Route path='/menu' component={MenuPage} />
                        <Route path='/media' component={MediaEventsPage} exact/>
                        <Route path='/media/:id' component={MediaEvent}/>
                        <Route path='/news' component={NewsPage} exact/>
                        <Route path='/news/:id' component={NewsDetails}/>
                        <Route path='/career' component={CareerPage}/>
                        <Route path='/career/:id' component={CareerPage}/>
                        <Route path='/contact' component={ContactPage}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }

}

export default App;