export default {
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'contentbox1',
            title: 'Content Box 1',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                    initialValue: 'Content Box 1'
                },
                {
                    name: 'description',
                    title: 'Content Box 1 Description',
                    type: 'text'
                },
                {
                    name: 'image',
                    title: 'Content Box 1 Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }

            ]
        },
        {
            name: 'contentbox2',
            title: 'Content Box 2',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                    initialValue: 'Content Box 2'
                },
                {
                    name: 'description',
                    title: 'Content Box 2 Description',
                    type: 'text'
                },
                {
                    name: 'image',
                    title: 'Content Box 2 Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        },
        {
            name: 'team',
            title: 'Team Section',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                    initialValue: 'About Us Team'
                },
                {
                    name: 'description',
                    title: 'Team Description',
                    type: 'text'
                },
                {
                    name: 'image',
                    title: 'Team Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                },
                {
                    name: 'align',
                    title: 'Content Alignment',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Left', value: 'left' },
                            { title: 'Right', value: 'right' },
                            { title: 'Center', value: 'center' }
                        ]
                    },
                    initialValue: 'left'
                }
            ]
        },
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Member Name',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Member Description',
                            type: 'text'
                        },
                        {
                            name: 'photo',
                            title: 'Member Photo',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'linkedinUrl',
                            title: 'LinkedIn URL',
                            type: 'url'
                        },
                        {
                            name: 'position',
                            title: 'Position/Role',
                            type: 'string'
                        },
                        {
                            name: 'email',
                            title: 'Email',
                            type: 'email'
                        }
                    ]
                }
            ]
        },
        {
            name: 'getInTouch',
            title: 'Get In Touch Section',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Section Title',
                    type: 'string',
                    initialValue: 'Get In Touch'
                },
                {
                    name: 'description',
                    title: 'Contact Description',
                    type: 'text'
                },
                {
                    name: 'image',
                    title: 'Contact Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                },
                {
                    name: 'align',
                    title: 'Content Alignment',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Left', value: 'left' },
                            { title: 'Right', value: 'right' },
                            { title: 'Center', value: 'center' }
                        ]
                    },
                    initialValue: 'left'
                },
                {
                    name: 'contactInfo',
                    title: 'Contact Information',
                    type: 'object',
                    fields: [
                        {
                            name: 'address',
                            title: 'Address',
                            type: 'text'
                        },
                        {
                            name: 'phone',
                            title: 'Phone Number',
                            type: 'string'
                        },
                        {
                            name: 'email',
                            title: 'Email',
                            type: 'email'
                        },
                        {
                            name: 'website',
                            title: 'Website',
                            type: 'url'
                        }
                    ]
                }
            ]
        }
    ]
} 