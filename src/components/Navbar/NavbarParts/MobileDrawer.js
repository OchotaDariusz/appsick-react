import {useDisclosure, Flex, Box, Button, VStack, Icon, HStack, Link as ChakraLink} from "@chakra-ui/react";
import Drawer from './DraweExample';
import {IoMdMenu} from 'react-icons/io';
import {Link} from 'react-scroll';
import React from "react";
import visit from "../../../assets/icons/Visit.svg";
import drugs from "../../../assets/icons/Drugs.svg";
import contact from "../../../assets/icons/Contact.svg";
import newVisit from "../../../assets/icons/new_visit.svg";


export default function MobileDrawer() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Flex >
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="left">
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
                </VStack>
            </Drawer>
        </Flex>
    );
};
