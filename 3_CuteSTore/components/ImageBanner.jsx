'use client';

import {useState , useRef , useEffect} from 'react'

export default function ImageBanner(){

    const [isLoaded,setIsLoaded] = useState(false)
    const imgRef = useRef()

    useEffect(() => {
        if (imgRef.current.complete){
            setIsLoaded(true)
        }
    },[]);

// progressive image loading
    return(
        <div className="banner-images">
            <img className="low-res-img" src="low_res/banner.jpeg" alt="banner-low-res"></img>
            <img ref={imgRef} className="high-res-img" src="mid_res/banner.png" alt="banner-mid_res" 
            style={{ opacity: isLoaded ? 1 : 0 }} onLoad={()=>{
                //when the high resolution image is complted loaded,this callback function will be excuted and the intention
                // is to get it to take 
                setIsLoaded(true)

            }}></img>
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>The Alexis Cutestore</h1>
                    </div>
                    <div>
                        <button>Shop Stickers</button>
                        <button>Shop Planners</button>
                    </div>
                </div>
            </div>
        </div>
    )
}