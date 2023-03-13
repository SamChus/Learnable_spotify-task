import styled from "styled-components";

const StyledGroup = styled.div`
    background: #fff;
    display: inline-flex;
    align-items: center;
    /* justify-content: space-between; */
    /* width: 170px; */
    padding: 0px 15px;
    border-radius: 40px;
    margin-left:10px;
    margin-top: 10px;
    text-align: center;
    cursor: pointer;
    

    h3{
        margin-left: 8px;
        font-size: 14px;
    }

    &:hover{
        background: #000;
        color: #fff;
        transform: scale(0.95);
        transition: all 300ms ease-in-out;
    }

    img{
        width: 22px;
        border-radius: 30px;
    }
`

const Shortcut = ({img, name}) => {
    return (  
        <StyledGroup>
            <img src={`./assets/${img}`} alt="shortcuts" />
            <h3>{name}</h3>
        </StyledGroup>
    );
}
 
export default Shortcut;