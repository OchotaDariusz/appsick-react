import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Flex, Text
} from "@chakra-ui/react";

export default function DrawerExample({
                                          placement = "right",
                                          width,
                                          isOpen,
                                          children,
                                          onClose,
                                          btnRef,
                                          title = "Menu",
                                          footer,
                                      }) {
    return (
        <Flex w={width}>
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent alignItems="center">
                    <DrawerCloseButton alignSelf="end" mx={15} my={15} />
                    <DrawerHeader my={15}>
                        <Text as="p"> {title} </Text>
                    </DrawerHeader>
                    <DrawerBody>{children}</DrawerBody>
                    <DrawerFooter>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}