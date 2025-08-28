import { MdKeyboardArrowRight } from "react-icons/md"



const HomePage = function () {
    return (
        <div className="flex-grow-1 main p-3 text-light text-center home-page-gradient">
            <img src="music.svg" alt="eppol logo" className="eppol-logo py-3" />
            <h1 className="py-2">Discover new music every day.</h1>
            <img src="music-note.png" alt="music-note" className="white-note py-4"/>
            <p className="pt-1 pb-0 mb-0">Get playlists and albums by the artists and genres you're listening to.</p>
            <p className="pt-0 mt-0">1 month free, then $10.99/month.</p>
            <button className="py-2 rounded-1 border-0 px-5 fw-medium">Try It Free</button>
            <a href="#" className="pt-3 pb-5 d-block text-decoration-none text-light">See Student Plan <MdKeyboardArrowRight /></a>
            
        </div>
    )
}

export default HomePage