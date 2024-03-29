import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    gap: 2.4rem;
    width: 113.7rem;
    margin: 4rem auto;
    height: calc(100vh - 330px);
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 2.4rem;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb
    {
        height: 4rem;
        border: .8rem solid;
        border-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 9999px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
    }
`