import React, { useEffect, useState } from "react";
import { client } from "../../../sanityio/sanityClient";
import "../../styles.css";

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "campaign"] {
            _id,
            title,
            description,
            images[]{asset->{url}}}`).then((data) => {
            setCampaigns(data);
        }).catch(console.error);
    }, []);

    return (
        <>
            <div className="home-container">
                <h1>Our Campaigns</h1>
                <div className="home-grid">
                    {campaigns.map((item) => (
                        <div key={item._id} className="home-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item.images?.map((img, idx) => (
                                <img key={idx} src={img.asset.url} alt={item.title} className="home-img" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Campaigns;