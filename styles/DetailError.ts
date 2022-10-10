import styled from "styled-components";

const ErrorWrap = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ErrorMessage = styled.span`
    font-size: 70px;
    font-family: 'Pacifico', cursive;
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;

const ErrorSubMessage = styled.span`
    font-size: 18px;
    font-weight: 800;
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`

export {
    ErrorWrap,
    ErrorMessage,
    ErrorSubMessage
}