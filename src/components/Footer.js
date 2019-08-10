import React from 'react';
import styled from 'styled-components';
import {Caption} from './base';

const Footer = ({children, desc}) => {
    return (
        <StyledFooter>
            <FooterContent>{children}</FooterContent>
            <FooterDesc>{desc}</FooterDesc>
        </StyledFooter>
    );
}

const StyledFooter = styled.View`
    
`

const FooterContent = styled.View`
    
`

const FooterDesc = styled(Caption)`

`

export default Footer;