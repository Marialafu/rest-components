import styled from "styled-components";

const StyledTitle = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
`

const StyledSubtitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 0rem;
        justify-content: space-between;
    }
`

const StyledInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
`

const StyledText = styled.span`
    font-size: 0.875rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`
const StyledBoldText = styled(StyledText)`
    font-weight: bold;
`

export {StyledTitle, StyledSubtitleContainer, StyledText, StyledBoldText, StyledInnerContainer}