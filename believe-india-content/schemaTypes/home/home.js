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