import React, { useEffect, useState } from "react";
import "../styles.css";
import { client } from '../../sanityio/sanityClient';

const About = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const query = `*[_type == "about"][0] {
                    title,
                    contentbox1 {
                        title,
                        description,
                        "image": image.asset->url
                    },
                    contentbox2 {
                        title,
                        description,
                        "image": image.asset->url
                    },
                    team {
                        title,
                        description,
                        "image": image.asset->url,
                        align
                    },
                    teamMembers[] {
                        name,
                        description,
                        "photo": photo.asset->url,
                        linkedinUrl,
                        position,
                        email
                    },
                    getInTouch {
                        title,
                        description,
                        "image": image.asset->url,
                        align,
                        contactInfo {
                            address,
                            phone,
                            email,
                            website
                        }
                    }
                }`;

                const data = await client.fetch(query);
                console.log("Fetched About Data:", data);
                setAboutData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching about data:", error);
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>
                Loading...
            </div>
        );
    }

    return (
        <div className="about-container">
            {/* Content Box 1 Section */}
            {aboutData?.contentbox1 && (
                <div className="about-hero">
                    <div className="about-hero-content">
                        {aboutData.contentbox1.image && (
                            <img src={aboutData.contentbox1.image} alt={aboutData.contentbox1.title} className="about-image-philosophy" />
                        )}
                        <div>
                            <h2>{aboutData.contentbox1.title}</h2>
                            <p>{aboutData.contentbox1.description}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Content Box 2 Section */}
            {aboutData?.contentbox2 && (
                <div className="about-hero">
                    <div className="about-hero-content">
                        {aboutData.contentbox2.image && (
                            <img src={aboutData.contentbox2.image} alt={aboutData.contentbox2.title} className="about-image-philosophy" />
                        )}
                        <div>
                            <h2>{aboutData.contentbox2.title}</h2>
                            <p>{aboutData.contentbox2.description}</p>

                            {/* Team Members Grid - Now here! */}
                            <div className="team-grid">
                                {aboutData.teamMembers && aboutData.teamMembers.length > 0 && (
                                    aboutData.teamMembers.map((member, memberIndex) => (
                                        <div key={memberIndex} className="team-card">
                                            {member.photo && (
                                                <img src={member.photo} alt={member.name} className="team-photo" />
                                            )}
                                            <h3>{member.name}</h3>
                                            <p>{member.description}</p>
                                            {member.linkedinUrl && (
                                                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">
                                                    View LinkedIn
                                                </a>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* About Us Team Section (without team members) */}
            {aboutData?.team && (
                <div className="about-box">
                    <h2>{aboutData.team.title}</h2>
                    <p>{aboutData.team.description}</p>
                    {/* No team members here anymore */}
                </div>
            )}

            {/* About Us Get In Touch Section */}
            {aboutData?.getInTouch && (
                <div className="about-contact">
                    <div className={`about-box ${aboutData.getInTouch.align || 'left'}`}>
                        {aboutData.getInTouch.image && (
                            <img src={aboutData.getInTouch.image} alt={aboutData.getInTouch.title} className="about-image" />
                        )}
                        <div className="about-content">
                            <h2>{aboutData.getInTouch.title}</h2>
                            <p>{aboutData.getInTouch.description}</p>

                            {/* Contact Information */}
                            {aboutData.getInTouch.contactInfo && (
                                <div className="contact-info">
                                    {aboutData.getInTouch.contactInfo.address && (
                                        <p><strong>Address:</strong> {aboutData.getInTouch.contactInfo.address}</p>
                                    )}
                                    {aboutData.getInTouch.contactInfo.phone && (
                                        <p><strong>Phone:</strong> {aboutData.getInTouch.contactInfo.phone}</p>
                                    )}
                                    {aboutData.getInTouch.contactInfo.email && (
                                        <p><strong>Email:</strong> {aboutData.getInTouch.contactInfo.email}</p>
                                    )}
                                    {aboutData.getInTouch.contactInfo.website && (
                                        <p><strong>Website:</strong> <a href={aboutData.getInTouch.contactInfo.website} target="_blank" rel="noopener noreferrer">{aboutData.getInTouch.contactInfo.website}</a></p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
