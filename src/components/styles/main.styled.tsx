import styled from 'styled-components';


export const Container = styled.div`
    max-width: 700px;
    margin: 0 auto;
`
export const Panel = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    > p {
        font-size: 36px;
        font-weight: 600;
    }
`