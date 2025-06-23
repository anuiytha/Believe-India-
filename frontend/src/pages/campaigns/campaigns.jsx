import React from "react";
import "../../styles.css";

const Campaigns = () => {
    return (
        <>
            <h1>This is the Campaigns Page</h1>
            <div className="home-container">
                <h1>Our Campaigns</h1>
                <div className="home-grid">
                    <div className="home-card">
                        <h2>Podium Finish Campaign</h2>
                        {/* <p>Support the Indian Olympic Team with PodiumFinish</p> */}
                        <img src="./podiumFinish.png" className="idea-image" />
                        <p>Podium Finish Campaign</p>
                        <p>To support Indian athletes for Olympics-2012</p>
                        <p>Signature Campaign: collected 50,000 signature & submitted to the govt.authority</p>
                        <button>View Project</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Campaigns;