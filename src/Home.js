import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image'
                src='https://techwiztime.com/wp-content/uploads/2016/08/amazon-prime-free-30-day-trial-banner-techwiztime.jpg'
                alt=''/>
                
                <div className='home__row'>
                    <Product
                        id={ 1000001 }
                        title='The lean startup'
                        price={ 29.99 }image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                        rating = { 5 }
                    />
                    <Product
                        id={ 1000002 }
                        title='Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Mouthwash to Help Kill 99% of Germs that Cause Bad Breath, Prevent Cavities, Strengthen Enamel &amp; More, Fresh Mint Flavor, 1 L'
                        price={ 59.99 }image="https://images-na.ssl-images-amazon.com/images/I/41z2VjDm1fL.jpg"
                        rating = { 3 }
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id={ 1000003 }
                        title='CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce'
                        price={ 13.47 }image="https://images-na.ssl-images-amazon.com/images/I/41l-4yOemPL.jpg"
                        rating = { 4 }
                    />
                    <Product
                        id={ 1000004 }
                        title='TruSkin Vitamin C Serum for Face with Hyaluronic Acid, Vitamin E, Witch Hazel, 1 fl oz'
                        price={ 19.99 }image="https://images-na.ssl-images-amazon.com/images/I/41zsknX-W4L.jpg"
                        rating = { 3 }
                    />
                    <Product
                        id={ 1000005 }
                        title='
                        Nizoral Anti-Dandruff Shampoo'
                        price={ 14.84 }image="https://images-na.ssl-images-amazon.com/images/I/416pO3UafaL.jpg"
                        rating = { 2 }
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id={ 1000006 }
                        title='Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Mouthwash to Help Kill 99% of Germs that Cause Bad Breath, Prevent Cavities, Strengthen Enamel &amp; More, Fresh Mint Flavor, 2.5 L'
                        price={ 99.99 }image="https://images-na.ssl-images-amazon.com/images/I/41z2VjDm1fL.jpg"
                        rating = { 4 }
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home
