import styled from "styled-components";

const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;

export {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
};