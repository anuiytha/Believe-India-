import React, { useEffect, useState } from "react";
import { client } from "../../../sanityio/sanityClient";
import "../../styles.css";

const Awards = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "awards"] {
            _id,
            title,
            description,
            images[]{asset->{url}}}`).then((data) => {
            setAwards(data);
        }).catch(console.error);
    }, []);

    return (
        <>
            <div className="home-container">
                <h1>Awards Page</h1>
                <div className="home-grid">
                    {awards.map((item) => (
                        <div key={item._id} className="home-card">
                            <h3>{item.title}</h3>
                            {item.images?.map((img, idx) => (
                                <img key={idx} src={img.asset.url} alt={item.title} className="home-img" />
                            ))}
                            <p>{item.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Awards;