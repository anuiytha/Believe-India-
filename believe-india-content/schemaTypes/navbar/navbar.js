export default {
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        {
            name: 'links',
            title: 'Navigation Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'navItem',
                    title: 'Navigation Item',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'string',
                            description: 'Optional. If this item has no subcategories, provide a URL.',
                        },
                        {
                            name: 'subcategories',
                            title: 'Subcategories',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'subcategoryItem',
                                    title: 'Subcategory Item',
                                    fields: [
                                        {
                                            name: 'label',
                                            title: 'Label',
                                            type: 'string',
                                            validation: Rule => Rule.required(),
                                        },
                                        {
                                            name: 'url',
                                            title: 'URL',
                                            type: 'string',
                                            validation: Rule => Rule.required(),
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
