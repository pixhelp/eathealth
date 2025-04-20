import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: ${props => props.bgcolorpost || '#fff'};
    border: 1px solid #eaeded;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    border-radius: 5px;
    display: flex;
    height:100%;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const ContentPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;
