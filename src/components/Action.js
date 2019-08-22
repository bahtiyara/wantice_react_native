import React from 'react';
import styled from 'styled-components';
import { Input, Caption, padding, colors } from './base';
import BlockButton from './BlockButton';

const Action = () => {
    return (
        <StyledAction>
            <ActionNum>1</ActionNum>
            <ActionContent>
                <ActionTitle defaultValue="深蹲" placeholder="动作名称" />
                <ActionAmount>4组 * 12</ActionAmount>
            </ActionContent>
            <ActionOption iconName="delete"></ActionOption>
        </StyledAction>
    );
}

const StyledAction = styled.View`
    flex-direction: row;
    padding: 0 ${padding.lg}px;
    height: 64px;
    align-items: center;
`;

const ActionNum = styled(Caption)`
    width: 24px;
    height: 24px;
    text-align: center;
    margin-right: 10px;
    color: ${colors.thirdText};
`;

const ActionContent = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: ${colors.divider};
    border-bottom-width: 0.5px;
`;

const ActionTitle = styled(Input)`
    flex: 1;
    height: 64px;
`;

const ActionAmount = styled(Caption)`
    margin-left: 10px;
    line-height: 64px;
`;

const ActionOption = styled(BlockButton)`
    position: absolute;
    /* 这里有潜在 Bug，不应该写死 80px */
    right: -80px;
`

export default Action;