import styled from "styled-components";

const DetailMainDiv = styled.div`
    width: 450px;
    height:140px;
    border-radius: 12px;
    margin-top: 10px;
    background-color: white;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 20px 20px -10px,
    rgba(0, 0, 0, 0.5) 0px 10px 20px -10px; 
`;

const DetailSubDiv = styled.div`
    width: 450px;
    height:360px;
    border-radius: 12px;
    margin-top: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 20px 20px -10px,
    rgba(0, 0, 0, 0.5) 0px 10px 20px -10px; 
`;

const ImageDiv = styled.div`
    position: relative;
    margin: 10px 0 0 10px;
    width: 120px;
    height: 120px;
    background-color: transparent;
`;

const ImageTag = styled.img`
    border: 3px solid cornflowerblue;
    border-radius: 6px;
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;

`;

const DetailWrap = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 40vw;
    display: flex;
    align-items:center;
    flex-direction: column;
`;

const Div = styled.div`
    background-color: transparent;
    height: 120px;
    width: 65%;
    margin: 12px 0 0 15px;
    display: flex;
    flex-direction: column;
`;

const DetailText = styled.span`
    background-color: transparent;
    color: cornflowerblue;
    font-size: 12px;
`

export {
    DetailMainDiv,
    ImageTag,
    ImageDiv,
    DetailWrap,
    Div,
    DetailText,
    DetailSubDiv
}