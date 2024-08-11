import React, { useState, useEffect } from 'react';
import client from '../sanityClient';
import { CircularProgress } from '@mui/material';
import  { urlFor } from '../imageUrl';

const SanityCard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = '*[_type == "post"]{title,author, imageUrl,text, publishedAt}';
        const data = await client.fetch(query);
        
        setPosts(data);
      } catch (err) {
        setError(err);
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error loading data.</div>;

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className='flex flex-wrap gap-4 justify-between'>
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-lg  w-[calc(50%-16px)] rounded-lg overflow-hidden mb-[30px]">
          <div className="relative rounded-[10px] overflow-hidden group">
            <div
              className="bg-cover bg-center relative transition-all duration-300 ease-in-out group-hover:opacity-90"
              style={{
                backgroundImage: `url(${urlFor(post.imageUrl).width(800).url()})`, 
                height: '230px',
              }}
            >
              <button className="absolute text-[12px] bottom-0 left-4 font-[600] text-white py-1 px-3 rounded"
                style={{ backgroundColor: '#2E32F1' }}>
                TECHNOLOGY
              </button>
            </div>
          </div>

          <div className="p-[26px]">
            <h4 className="text-[#161616] font-[600] text-[18px] mb-[15px] hover:text-[#3C3FDE] transition-colors duration-300">
              {post.title}
            </h4>
            <div className='flex gap-3 items-center mb-[10px]'>
              <div className='text-gray-700 font-[600] text-[12px]'>{post.author}</div>
              <div className='text-gray-400 font-[400] text-[12px]'>{formatDate(post.publishedAt)}</div>
              
            </div>
            <p className='text-gray-700 text-[14px]'>{post.text}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default SanityCard;
