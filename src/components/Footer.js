import React from 'react';
import styled from 'styled-components';
import {Caption, padding, colors} from './base';

const Footer = ({children, desc}) => {
    return (
        <StyledFooter>
            <FooterContent>{children}</FooterContent>
            <FooterDesc>{desc}</FooterDesc>
        </StyledFooter>
    );
}

const StyledFooter = styled.View`
    background: ${colors.background};
    align-items: center;
    box-shadow: 0 -10px 20px ${colors.background};
`

const FooterContent = styled.View`
    margin-top: ${padding.xl};
`

const FooterDesc = styled(Caption)`
    margin: ${padding.md}px 0 ${padding.lg}px 0;
`

export default Footer;