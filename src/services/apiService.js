import client from '../sanityClient';

export const fetchPosts = async () => {
    const query = '*[_type == "post"]{title, author, imageUrl, text, publishedAt}';
    try {
        const data = await client.fetch(query);
        return data;
    } catch (err) {
        console.error('Error fetching posts:', err);
        throw err;
    }
};