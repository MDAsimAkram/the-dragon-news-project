import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'> <small> Journalism Without Fear or Favour </small></p>

                {/* date tak eivabe dewaa jabe na..atak daynamik vabe korte hobe jno ata international vabe automatic change hoy */}
                {/* date ta dynamic vabe korchi */}
                <p> {moment().format("dddd, MMMM D, YYYY")} </p>

            </div>
            {/* Akta button nilam oita k upore import korlam....className='d-flex dilam ak line a anbo tai */}
            <div className='d-flex'>
                <Button variant="danger">Latest </Button>
                <Marquee className='text-danger' speed={100}>
                    Welcome To Dragon News..I Love you All...New news is comming soon...So get ready...Tonmoy,Little Doremon TinTin Tonny,Santi,Srabony,Meghla,Borsha,Jannat,Bidda,Borna,Bristy.
                </Marquee>
            </div>
        </Container>
    );
};
export default Header;