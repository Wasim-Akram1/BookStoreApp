import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import {Link} from 'react-router-dom'

function Course() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut delectus vitae totam perferendis, aspernatur unde voluptatum debitis maxime aperiam eveniet id dolorum architecto reiciendis laudantium facere rem provident, corporis quo dolores sapiente repellendus nobis! Molestiae veniam asperiores velit fugit quidem in voluptatibus at a accusamus! Repellat eos dolor similique?</p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-12'>
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
