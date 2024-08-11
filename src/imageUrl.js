import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: '2jo5gq46',
    dataset: 'production',
    apiVersion: '2024-08-11',
    useCdn: true,
});

const imageBuilder = createImageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);