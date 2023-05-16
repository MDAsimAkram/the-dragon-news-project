import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

import bg1 from '../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4' > LogIn With</h4>

            <Button className='mb-2' variant="primary"><FaGoogle /> LogIn with Google</Button>
            <Button variant="secondary"><FaGithub />LogIn with GitHub</Button>

            {/* porer part Find Us On */}
            <div>
                <h4 className='mt-4'> Find Us On </h4>
                {/* list group tak copy kore anlam */}

                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                  
                </ListGroup>
            </div>
            <QZone> </QZone>

            {/* Create an Amazing Newspaper */}
            <div>
                <img src={bg1} alt="" />
            </div>
        </div>
    );
};

export default RightNav;