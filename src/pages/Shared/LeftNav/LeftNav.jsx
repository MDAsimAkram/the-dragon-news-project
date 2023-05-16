import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    // categoris er data gula load korbo.....

    const [categoris, setCatagoris] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-mdasimakram.vercel.app/categoris')
            .then(res => res.json())

            .then(data => setCatagoris(data))

            .catch(error => console.error(error))

    }, [])

    return (
        <div>
            <h4> All CateGory</h4>
          <div className='ps-4'>
          {
                categoris.map(category => <p

                    key={category.id}
                >
                    <Link to = { `/category/${category.id} ` }className='text-black text-decoration-none'> {category.name }</Link>
                </p>)
            }
          </div>
        </div>
    );
};

export default LeftNav;