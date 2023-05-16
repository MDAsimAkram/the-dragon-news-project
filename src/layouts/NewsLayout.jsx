import React from 'react';

{/* Main.jsx theke copy kore niye aslam */}
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";


const NewsLayout = () => {
    return (
        <div>
            {/* Main.jsx theke copy kore niye aslam */}

            <Header> </Header>
            {/* React bootstrap grid Layout theke  link copy kore ane bosalam..import o korlam Line 4 a  */}

            <Container>
                <Row>
                    {/* main middle position */}

                    <Col lg={9}> 
                  {/* eita na kore Outlet er moddhe rakhbo tahole daynamic vabe dekhabe j catagory te click korbo oita */}

                    <Outlet> </Outlet>
                    </Col>
                    {/* Right side er nav bar */}
                    <Col lg={3}> 
                    <RightNav> </RightNav>
                    </Col>

                </Row>
            </Container>

            <Footer> </Footer>

        </div>
    );
};

export default NewsLayout;