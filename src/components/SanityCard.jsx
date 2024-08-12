import React, { useState, useEffect } from 'react';
import client from '../sanityClient';
import { CircularProgress } from '@mui/material';
import { urlFor } from '../helpers/imageUrl';
import { useTheme } from '../context/ThemeContext'; 
import { formatDate } from '../helpers/formatdate';
import { fetchPosts } from '../services/apiService';
import SkeletonCard from './SkeletonCard';

const SanityCard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useTheme(); 

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <SkeletonCard />;
  if (error) return <div>Error loading data.</div>;


  return (
    <div className='flex flex-wrap gap-4 justify-between'>
      {posts.map((post) => (
        <div
          key={post._id}
          className={`w-[calc(50%-16px)] mb-[30px] rounded-lg overflow-hidden shadow-lg ${
            darkMode ? 'bg-black' : 'bg-white'
          }`}
        >
          <div className="relative rounded-[10px] overflow-hidden group">
            <div
              className="bg-cover bg-center relative transition-all duration-300 ease-in-out group-hover:opacity-90"
              style={{
                backgroundImage: `url(${urlFor(post.imageUrl).width(800).url()})`,
                height: '230px',
              }}
            >
              <button
                className="absolute text-[12px] bottom-0 left-4 font-[600] text-white py-1 px-3 rounded"
                style={{ backgroundColor: darkMode ? '#3C3FDE' : '#2E32F1' }}
              >
                TECHNOLOGY
              </button>
            </div>
          </div>

          <div className="p-[26px]">
            <h4
              className={`text-[18px] mb-[15px] font-[600] hover:text-[#3C3FDE] transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-[#161616]'
              }`}
            >
              {post.title}
            </h4>
            <div className='flex gap-3 items-center mb-[10px]'>
              <div className={`text-[12px] font-[600] ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {post.author}
              </div>
              <div className={`text-[12px] font-[400] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {formatDate(post.publishedAt)}
              </div>
            </div>
            <p className={`text-[14px] ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {post.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SanityCard;
