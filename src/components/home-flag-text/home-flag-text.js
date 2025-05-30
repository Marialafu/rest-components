import styled from "styled-components";

const StyledTitle = styled.h2`
    margin: 0;
    font-weight: bold;
    font-size: 1.125rem;
`

const StyledSubtitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1.5rem;
    padding-bottom: 3rem;
`

const StyledTagsContainer = styled.div`
    display: flex;
    gap: 0.125rem;
`

const StyledSubtitle = styled.span`
    font-weight: 700;
    font-size: 0.875rem;
`

const StyledText = styled.span`
    font-size: 0.875rem;
`

export {StyledTitle, StyledSubtitleContainer, StyledTextContainer, StyledTagsContainer, StyledSubtitle, StyledText}