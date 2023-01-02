import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    padding: 20px 20px;
    display: flex;
    gap: 30px;
    justify-content: center;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 414px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`