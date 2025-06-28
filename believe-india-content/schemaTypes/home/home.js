export default {
    name: 'home',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'biLogo',
            title: 'BI Logo Text',
            type: 'string'
        },
        {
            name: 'biLogoImage',
            title: 'BI Logo Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'homepageContent',
            title: 'Home Page Content',
            type: 'object',
            fields: [
                {
                    name: 'tagline',
                    title: 'Tagline Section',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Tagline Title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Tagline Description',
                            type: 'text'
                        },
                        {
                            name: 'image',
                            title: 'Tagline Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                },
                {
                    name: 'content1',
                    title: 'Content 1 Section',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Content 1 Title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Content 1 Description',
                            type: 'text'
                        },
                        {
                            name: 'image',
                            title: 'Content 1 Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                },
                {
                    name: 'content2',
                    title: 'Content 2 Section',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Content 2 Title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Content 2 Description',
                            type: 'text'
                        },
                        {
                            name: 'image',
                            title: 'Content 2 Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'carouselImages',
            title: 'Carousel Images',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text'
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
}