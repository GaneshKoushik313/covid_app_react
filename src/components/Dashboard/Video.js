import React from "react";
import "./Dashboard.css"

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this._video = null;
        this._fullScreenActive = null;
        this._fullScreenIntervalSeconds = 5;
        this.state = {
            fullScreen: false,
            playing: false,
            showSettings: false,
            dur: "00:00:00",
            progress: "0"
        };
    }
    componentDidMount(){
        window.onload= function(){
            var x = document.getElementById("myVideo").play();
        }
    }

    render() {
        return (
            <div className="video">
                <video className="w-100" autoPlay={true} muted playsinline loop id="myVideo">
                    <source src="https://cdn.videvo.net/videvo_files/video/free/2020-12/small_watermarked/201211%20_01_Covid%20Vaccine_4k_011_preview.webm" type="video/webm" />
                </video>
            </div>    
        );
    }
}
