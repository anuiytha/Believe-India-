import React from "react";
import "../../styles.css";

const Campaigns = () => {

    const CampaignList = [
        {
            name: 'Podium Finish Campaign',
            images: ['./podiumFinish .png'],
            desc: [
                'To support Indian athletes for Olympics-2012',
                'Signature Campaign: collected 50,000 signatures & submitted to the govt. authority'
            ]
        },
        {
            name: 'Computer Literacy Haat - Kalkaji, Delhi',
            images: [
                './Computer Literacy 1.png',
                './Computer Literacy 2.png'
            ],
            desc: [
                'Basic Computer Literacy Course',
                'Women empowerment workshops',
                'Personality development classes',
                'Library cum resource center with Nirmal Bharti Public School',
                'Children Creativity Club'
            ]
        }
    ];


    return (
        <>
            <div className="home-container">
                <h1>Our Campaigns</h1>
                <div className="home-grid">
                    {CampaignList.map((campaign, index) => (
                        <div key={index} className="home-card">
                            <h2 style={{ textAlign: 'center' }}>{campaign.name}</h2>

                            {campaign.images.map((imgSrc, imgIdx) => (
                                <img
                                    key={imgIdx}
                                    src={imgSrc}
                                    alt={`${campaign.name} image ${imgIdx + 1}`}
                                    className="idea-image"
                                />
                            ))}

                            <div style={{ textAlign: 'center' }}>
                                {campaign.desc.map((line, lineIdx) => (
                                    <p key={lineIdx}>{line}</p>
                                ))}
                            </div>

                            <button style={{ display: 'block', margin: '0 auto' }}>View Project</button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
export default Campaigns;