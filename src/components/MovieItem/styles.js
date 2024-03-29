import styled from "styled-components"

export const Container = styled.div`
    display: flex;

    width: 100%;
    padding: 3.2rem;
    flex-direction: column;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_PINK};

    > h2 a {
        color: ${({ theme }) => theme.COLORS.WHITE_800};
    }

    > p {
        font-family: 'Roboto', serif;
        line-height: 1.9rem;
        font-size: 1.6rem;
        margin-top: 1.5rem;
        
        color: ${({ theme }) => theme.COLORS.GRAY_700};

        background-color: transparent;
        border: none;
        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 1.5rem;
    }
`