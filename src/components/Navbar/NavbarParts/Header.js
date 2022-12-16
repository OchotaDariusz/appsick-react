import {Image, Flex, Button, HStack, chakra} from '@chakra-ui/react';
import {Link} from 'react-scroll'
import React from "react";
import MobileDrawer from "./MobileDrawer";
import logo from '../../../assets/logo/logo.png'
import visit from "../../../assets/icons/Visit.svg";
import drugs from "../../../assets/icons/Drugs.svg";
import contact from "../../../assets/icons/Contact.svg";
import newVisit from "../../../assets/icons/new_visit.svg";
import {CgKey} from "react-icons/cg";
import maleDoctor from "../../../assets/icons/Lekarz.svg";
import femaleDoctor from "../../../assets/icons/Lekarka.svg";

const CTA = "Get Started"


export default function Header(props) {
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <Image src={logo} h="50px"/>

                <HStack as="nav" spacing="5">
                    <Link >
                        <Button variant="nav"> aaaaa aaaaaaa aaaaaaaaa</Button>
                    </Link>
                    <Link >
                        <Button variant="nav"> aaaaa aaaaaaa aaaaaaaaa</Button>
                    </Link>
                    <Link >
                        <Button variant="nav"> aaaaa aaaaaaa aaaaaaaaa</Button>
                    </Link>
                    <Link >
                        <Button variant="nav"> aaaaa aaaaaaa aaaaaaaaa</Button>
                    </Link>

                    {/*<Link to={'/visit'} variant="nav">*/}
                    {/*    <div className="svg-container">*/}
                    {/*        <object type="image/svg+xml" data={visit}*/}
                    {/*                width="100%" height="100%" className="svg-content">*/}
                    {/*        </object>*/}
                    {/*    </div>*/}
                    {/*    MY VISITS*/}
                    {/*</Link>*/}
                    {/*<Link to={'/visit'} variant="nav">*/}
                    {/*    <div className="svg-container">*/}
                    {/*        <object type="image/svg+xml" data={drugs}*/}
                    {/*                width="100%" height="100%" className="svg-content">*/}
                    {/*        </object>*/}
                    {/*    </div>*/}
                    {/*    DRUGS DRUGS DRUGS*/}
                    {/*</Link>*/}
                    {/*<Link to={'/visit'} variant="nav">*/}
                    {/*    <div className="svg-container">*/}
                    {/*        <object type="image/svg+xml" data={contact}*/}
                    {/*                width="100%" height="100%" className="svg-content">*/}
                    {/*        </object>*/}
                    {/*    </div>*/}
                    {/*    MAKE AN APPOINTMENT*/}
                    {/*</Link>*/}
                    {/*<Link to={'/visit'} variant="nav">*/}
                    {/*    <div className="svg-container">*/}
                    {/*        <object type="image/svg+xml" data={newVisit}*/}
                    {/*                width="100%" height="100%" className="svg-content">*/}
                    {/*        </object>*/}
                    {/*    </div>*/}
                    {/*    MAKE AN APPOINTMENT*/}
                    {/*</Link>*/}


                </HStack>
                <HStack>
                    <Button aria-label={CTA} variant="outline">
                        {CTA}
                    </Button>

                    {/*{!props.auth.email ?*/}


                    {/*    <div className="w-100">*/}
                    {/*        <div*/}
                    {/*            className="btnx collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">*/}

                    {/*            <div*/}
                    {/*                className="menu-login button-login fs-3 text-black border border-dark border-2 rounded-pill p-2 green-shadow"*/}
                    {/*                onClick={() => props.setLoginModalShow(true)}*/}
                    {/*                role="button">*/}
                    {/*                {'\u00A0'}{'\u00A0'}Login | Register{'\u00A0'}*/}
                    {/*                <div className="fs-1 d-inline">*/}
                    {/*                    <CgKey/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    :*/}
                    {/*    <>*/}
                    {/*        <div className="w-25">*/}
                    {/*            <div*/}
                    {/*                className="container collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">*/}

                    {/*                <Link*/}
                    {/*                    className="border border-dark border-2 rounded-pill p-2 green-shadow btnx"*/}
                    {/*                    to={'/user-page'}*/}
                    {/*                    role="button">*/}
                    {/*                    <img src={visit?.doctor?.user?.image ?*/}
                    {/*                        visit?.doctor?.user?.image :*/}
                    {/*                        visit?.doctor?.user?.sex === "MALE" ?*/}
                    {/*                            maleDoctor : femaleDoctor}*/}
                    {/*                         className="img-fluid rounded-circle"*/}
                    {/*                         style={{height: "50px", width: "50px"}}*/}
                    {/*                         alt="doctor"/>*/}
                    {/*                </Link>*/}

                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="w-100">*/}
                    {/*            <div*/}
                    {/*                className="collapse navbar-collapse nav-link d-flex justify-content-end align-items-center">*/}

                    {/*                <div className="justify-content-end">*/}
                    {/*                    <div*/}
                    {/*                        className="collapse navbar-collapse nav-link flex-nowrap d-inline-flex">*/}

                    {/*                        /!*<div*!/*/}
                    {/*                        /!*    className="menu-login button-login fs-3 text-black border border-dark border-2 rounded-pill p-2 green-shadow btnx"*!/*/}
                    {/*                        /!*    onClick={props.logout}*!/*/}
                    {/*                        /!*    role="button">*!/*/}
                    {/*                        /!*    {'\u00A0'}{'\u00A0'}Logout{'\u00A0'}*!/*/}
                    {/*                        /!*    <div className="fs-1 d-inline">*!/*/}
                    {/*                        /!*        <CgKey/>*!/*/}
                    {/*                        /!*    </div>*!/*/}
                    {/*                        /!*</div>*!/*/}
                    {/*                    </div>*/}

                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*    </>*/}
                    {/*}*/}
                    <MobileDrawer />
                </HStack>

            </Flex>
        </chakra.header>
    );
}

