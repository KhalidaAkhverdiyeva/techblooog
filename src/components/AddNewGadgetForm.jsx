
import React, { useState } from 'react';
import client from '../sanityClient';

const AddNew = ({ isOpen, onClose, onCardCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    date: '',
    imageUrl: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
        
      }));
      
  };
  console.log('formdata', formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      const result = await client.create({
        _type: 'gadget',
        title: formData.title,
        text: formData.text,
        date: formData.date,
        imageUrl: formData.imageUrl,
        author: formData.author,
      });
      console.log('Document created:', result);
      onCardCreated(result);
      onClose(); 
    } catch (error) {
      console.error('Create document failed:', error);
    }
  };

  return (
    <div className={`z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Text</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
