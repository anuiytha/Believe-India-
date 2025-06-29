export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Project Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Project Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'date',
            title: 'Project Date',
            type: 'date',

        },
        {
            name: 'status',
            title: 'Project Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Planning', value: 'planning' },
                    { title: 'In Progress', value: 'in-progress' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'On Hold', value: 'on-hold' },
                    { title: 'Cancelled', value: 'cancelled' }
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'projectUrl',
            title: 'Project URL',
            type: 'url',
            description: 'Link to view the project details'
        },
        {
            name: 'category',
            title: 'Project Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Education', value: 'education' },
                    { title: 'Healthcare', value: 'healthcare' },
                    { title: 'Environment', value: 'environment' },
                    { title: 'Technology', value: 'technology' },
                    { title: 'Community Development', value: 'community-development' },
                    { title: 'Women Empowerment', value: 'women-empowerment' },
                    { title: 'Rural Development', value: 'rural-development' },
                    { title: 'Other', value: 'other' }
                ]
            }
        },
        {
            name: 'location',
            title: 'Project Location',
            type: 'string',
            description: 'Where the project is being implemented'
        },
        {
            name: 'team',
            title: 'Project Team',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Team Member Name',
                            type: 'string'
                        },
                        {
                            name: 'role',
                            title: 'Role in Project',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'impact',
            title: 'Project Impact',
            type: 'text',
            description: 'Description of the project\'s impact and outcomes'
        },
        {
            name: 'funding',
            title: 'Funding Information',
            type: 'text',
            description: 'Information about project funding and budget'
        },
        {
            name: 'partners',
            title: 'Project Partners',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of organizations or individuals partnering on this project'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            },

        },
        {
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            description: 'Mark this project as featured to highlight it on the website',
            initialValue: false
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which projects should be displayed (lower numbers appear first)',
            initialValue: 0
        }
    ],
    orderings: [
        {
            title: 'Date, New',
            name: 'dateDesc',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        },
        {
            title: 'Date, Old',
            name: 'dateAsc',
            by: [
                { field: 'date', direction: 'asc' }
            ]
        },
        {
            title: 'Name, A-Z',
            name: 'nameAsc',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [
                { field: 'order', direction: 'asc' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'status',
            media: 'image'
        }
    }
}; 