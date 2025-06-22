import { createClient } from 'contentful';

const useContentful = () => {
    const client = createClient({
        // shld put these credentials in .env file
        space: 'sof4v5jsgktw',
        accessToken: "ZopswWRV7jKLeY_IF63U1HVgCSKAbKtCSHxkqM1SWzw",
        host: "cdn.contentful.com"
    });

    const getBIHomePage = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "biHomePage",
                select: "fields",
            });

            console.log("Raw Entries:", entries.items); // Debugging

            const sanitizedEntries = entries.items.map((item) => {
                const biLogoImage = item.fields.BILogoImage?.fields?.file?.url
                    ? `https:${item.fields.BILogoImage.fields.file.url}`
                    : null;

                return {
                    BILogo: item.fields.BILogo || '',
                    Description: item.fields.Description || '',
                    BiLogoImage: biLogoImage,
                    ...item.fields
                };
            });

            console.log("Sanitized Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries[0]; // Return first entry
        } catch (error) {
            console.error("Error fetching BI Home Page:", error);
            throw error;
        }
    };

    const getCarouselImages = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "carouselImages",
                select: "fields",
            });

            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                title: item.fields.title || '',
                description: item.fields.description || "",
                imageUrl: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null,
            }))

            console.log("Sanitized Carousel Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching Carousel Images:", error);
            throw error;
        }
    }

    const getAboutUsPhilosophy = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "aboutUsPhilosophy",
                select: "fields",
            });

            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                title: item.fields.title || "",
                description: item.fields.description || "",
                image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null,
            }))

            console.log("Sanitized About Us Philosophy Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
        }
    }

    const getAboutUsTeam = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "aboutUsTeam",
                select: "fields",
            });

            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                name: item.fields.name || "",
                description: item.fields.description || "",
                image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null,
            }))

            console.log("Sanitized About Us Team Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching About Us Team:", error);
            throw error;
        }
    }

    const getAboutUsGetInTouch = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "aboutUsGetInTouch",
                select: "fields",
            });
            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                name: item.fields.name || "",
                description: item.fields.description || "",
                image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null,
            }))

            console.log("Sanitized About Us Get In Touch Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching About Us Get In Touch:", error);
            throw error;
        }
    }

    const getAboutUsTeamMembers = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "aboutUsTeamMembers",
                select: "fields",
            });
            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                name: item.fields.name || "",
                description: item.fields.description || "",
                photo: item.fields.photo?.fields?.file?.url ? `https:${item.fields.photo.fields.file.url}` : null,
                linkedinUrl: item.fields.linkedin || ""
            }))

            console.log("Sanitized About Us Team Members Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching About Us Team Members:", error);
            throw error;
        }
    }

    const getProjects = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "believeIndiaProjects",
                select: "fields",
            });
            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                name: item.fields.name || "",
                description: item.fields.description || "",
                image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null,
                date: item.fields.date || "",
                status: item.fields.status || "",
            }))

            console.log("Sanitized Projects Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching Projects:", error);
            throw error;
        }
    }

    const getBelieveIndiaIntro = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "believeIndiaIntro",
                select: "fields",
            });
            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                name: item.fields.name || "",
                description: item.fields.description || "",

            }))

            console.log("Sanitized Believe India Intro Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching Believe India Intro:", error);
            throw error;
        }
    }

    const getBelieveIndiaServices = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "believeIndiaServices",
                select: "fields",
            });
            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                title: item.fields.title || "",
                description: item.fields.description || "",
                image: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null,

            }))

            console.log("Sanitized Believe India Services Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching Believe India Services:", error);
            throw error;
        }
    }

    const getAboutDropdownlist = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "aboutDropdownlist",
                select: "fields",
            });

            console.log("Raw Entries:", entries.items); // Debugging
            const sanitizedEntries = entries.items.map((item) => ({
                name: item.fields.name || '',
                path: item.fields.path || "",

            }))

            console.log("Sanitized About Dropdownlist Entries:", sanitizedEntries); // Debugging
            return sanitizedEntries;
        } catch (error) {
            console.error("Error fetching About Dropdownlist:", error);
            throw error;
        }
    }



    return { getBIHomePage, getCarouselImages, getAboutUsPhilosophy, getAboutUsTeam, getAboutUsGetInTouch, getAboutUsTeamMembers, getProjects, getBelieveIndiaIntro, getBelieveIndiaServices, getAboutDropdownlist };
}

export default useContentful;   