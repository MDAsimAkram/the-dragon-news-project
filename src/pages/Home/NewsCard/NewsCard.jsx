import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Link } from 'react-router-dom';

// {news} data gula k pabo...........
const NewsCard = ({ news }) => {
    // data gula distructuring korbo........
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
        <Card className="mb-4 ">
            {/* author information gula <Card.Header> er moddhe dekhabo ..Img tak import kora lagbe*/}
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />

                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>

                    {/* Date ta thik formet a nai tai oitak thik formet a dekhabo.. */}
                    <p><small> {moment(author?.published_date).format('YYYY-MM-DD, h:mm:ss a')}</small></p>
                </div>
                {/* icon lahbe dann pasee 2 ta */}
                <div>
                    <FaRegBookmark> </FaRegBookmark> <FaShareAlt> </FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Img variant="top" src={image_url} />

                <Card.Text>
                    {/* news er length 250word er niche hole dekhabe nahole read more a click korle show hobe full news ta */}

                    {details.length < 250 ? <>{details}</> :
                        <> {details.slice(0, 250)}... <Link to={`/news/${_id}`} > Read more </Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">

                {/* star icon ar rating er data gula dekhabo */}
                <div className='flex-grow-1 d-flex align-items-center'>

                 <Rating style={{ maxWidth: 150 }} 
                //  rating jodi thake tahole oita dekhabo nahole 0 dekhabo
                 value={Math.round(rating?.number || 0)} readOnly />

                    <span className='ms-2'>{rating?.number}</span>
                </div>

                {/* eye er icon ar total view ta dekhabo */}
                <div>
                    <FaEye> </FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;