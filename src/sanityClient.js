import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '2jo5gq46',
    dataset: 'production',
    apiVersion: '2024-08-11',
    useCdn: false,
});

export default client;