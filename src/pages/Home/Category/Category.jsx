import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // id tak distructuring korbo...

    const {id} = useParams();

    const categoryNews = useLoaderData();

    return (
        <div>
            {/* id thakle nicher heading ta main page a dekhabo but home a gele  dekhabo naaa */}

           {id && <h2> This Category News: {categoryNews.length} </h2>} 

            {/* Prottek ta news er jonno amra new category te jabo */}
            {
                categoryNews.map( news => <NewsCard 
                key={news._id}
                news = {news}
                ></NewsCard>)
            }

        </div>
    );
};

export default Category;