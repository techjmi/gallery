import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    const apiKey = 'kVRORG4Oo7M7F4EByzaD9wxsDAXSWwK2hbeHWPUSdM46176JQ2c5fFLg';
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=15`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: apiKey
        }
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className='w-full'>
    <div className='w-full md:w-4/5 mx-auto'>
    <h1 className='text-center font-semibold text-gray-500 mb-6'>Search Your Image</h1>
      <div className="flex gap-4 flex-row mb-3 mx-auto w-full text-center items-center justify-center">
      <input className=' outline-none px-3 py-1 bg-slate-100  rounded-md'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={searchImages} className=' outline-none px-3 py-1 bg-blue-700 shadow-md rounded-md'>Search</button>
      </div>
      <div className="image-gallery flex flex-row flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <>
          <img key={image.id} src={image.src.medium} alt={image.photographer} height='auto' width='200px' className=' aspect-auto object-cover bg-cover rounded-md shadow-md hover:blur-sm cursor-pointer'/>
          {/* <div className="button">
            <button>view</button>
            <button>details</button>
          </div> */}
          </>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Home;
