import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    // akhn news er data gula load kore pabo ar seita card er moto kore dekhabo...
    const news = useLoaderData();

    const { _id, title, details, image_url, category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    {/* button ta akta link akare ache */}

                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft> </FaArrowLeft>All news in this category</Button> </Link>

                </Card.Body>
            </Card>

            <EditorsInsight> </EditorsInsight>
        </div>
    );
};

export default News;