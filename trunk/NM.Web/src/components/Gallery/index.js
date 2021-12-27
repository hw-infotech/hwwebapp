import React from "react"
import { IMuiFbPhotoGridImage, MuiFbPhotoGrid } from 'mui-fb-photo-grid';
import Dashboard from "../../layout/dashboard"
import Stories from 'react-insta-stories';

import { IMAGES1, stories12 } from "./JSON";

const Gallery = () => {

    const storyStyles = {
        width: "100%",
        margin: "auto",
        borderRadius: "15px ",
        height: "420px",
        maxWidth: "100%",
        maxHeight: "420px",
        justifyContent: "center !important"
    }

    const storyContainerStyles = {
        margin: "auto",
        borderRadius: "15px",
        background: "rgb(195 42 42) ",
    }

    return (
        <Dashboard>
            <div className="container" id="">
                <div className="galleryMain">
                    {/***/}
                    <div className="p-2">
                        <div className="p-2">
                            <h2>Event Stories</h2>
                        </div>
                        <Stories
                            style={{ background: "red", }}
                            loop={false}
                            stories={stories12}
                            // defaultInterval={8000}
                            width={600}
                            height={450}
                            keyboardNavigation={true}
                            storyStyles={storyStyles}
                            storyContainerStyles={storyContainerStyles}
                        />
                    </div>
                    <div className="p-2">
                        {/**/}
                        <div className="p-2">
                            <h2>Nestormind Gallery</h2>
                        </div>
                        <MuiFbPhotoGrid
                            images={IMAGES1} // require
                            reactModalStyle={{ overlay: { zIndex: 2000 } }}
                        />
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Gallery
