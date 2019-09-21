import React, {Component} from 'react';
import galleryImg from '../../assets/images/sherep-5.png'
import slideImg from '../../assets/images/sherep-3.png';


import classes from './GalleryPage.css';
import Slider from "../PagesFunctions/Slider/Slider";

import '../PagesFunctions/Slider/Slider.css';
// import Carousel from 'react-image-carousel';
import img0 from '../../assets/images/sherep-5.png';
import img1 from '../../assets/images/sherep-3.png';
import img2 from '../../assets/images/sherep-7.png';
import img3 from '../../assets/images/sherep-8.png';
import ImageGallery from "react-image-gallery/src/ImageGallery";

class GalleryPage extends Component {





    render() {


        // {
        //     original: 'https://picsum.photos/id/1018/1000/600/',
        //         thumbnail: 'https://picsum.photos/id/1018/250/150/',
        // },
        // {
        //     original: 'https://picsum.photos/id/1015/1000/600/',
        //         thumbnail: 'https://picsum.photos/id/1015/250/150/',
        // },
        // {
        //     original: 'https://picsum.photos/id/1019/1000/600/',
        //         thumbnail: 'https://picsum.photos/id/1019/250/150/',
        // },
        return (
            <div className={classes.GalleryPage}>
                <div className={classes.GalleryPageBack}>
                    <img src={galleryImg} alt=""/>
                </div>

                <div className={classes.GalleryPageSlider}>
                    <h1>Gallery</h1>
                    {/*<ImageGallery items={images} />*/}
                    <Slider />
                </div>
            </div>
        );
    }
}

export default GalleryPage;