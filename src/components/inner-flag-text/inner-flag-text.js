import styled from "styled-components";

const StyledTitle = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({$lightMode}) => $lightMode ?  '#2B3844':'#FCFCFC'};

    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
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
    line-height: 2rem;
    color: ${({$lightMode}) => $lightMode ?  '#2B3844':'#FCFCFC'};

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`
const StyledBoldText = styled(StyledText)`
    font-weight: bold;
    color: ${({$lightMode}) => $lightMode ?  '#2B3844':'#FCFCFC'};
`

export {StyledTitle, StyledSubtitleContainer, StyledText, StyledBoldText, StyledInnerContainer}