import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: '8sh68d65',      // e.g. "3abxyz1"
    dataset: 'production',             // or whatever you set during init
    apiVersion: '2024-06-24',          // use today's date
    useCdn: true                       // faster for public, non-authenticated content
});
