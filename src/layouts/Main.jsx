import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
    return (
        <div>
            <Header> </Header>
            <NavigationBar> </NavigationBar>
            
            {/* React bootstrap grid Layout theke  link copy kore ane bosalam..import o korlam Line 4 a  */}

            <Container>

                <Row>
                    {/* Left side er nav bar */}
                    <Col lg={3}>
                        <LeftNav> </LeftNav>
                    </Col>

                    {/* main middle position */}

                    <Col lg={6}> 
                    {/* <h2> Main News Comming........ </h2>  ... eita na kore Outlet er moddhe rakhbo tahole daynamic vabe dekhabe j catagory te click korbo oita */}

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

export default Main;