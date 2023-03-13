import styled from "styled-components";

const MediaObject = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    line-height: 1.5;
    width: 400px;
    cursor: pointer;

    /* &:hover{
        transform: translateX(2%);
    } */
    

    img{
        width: 60px;
        margin-right: 10px;
        border-radius: 30px;
    }
    h3,p{
        margin: 0;
        font-weight: 400;
    }
    p{
        color: #777;
    }

    &>div:last-of-type{
        font-size: 24px;
        font-weight: 700;
        margin-left: 80px;
    }

`

const Fav = ({img, name, desc}) => {
    return (  
        <MediaObject>
            <div>
                <img src={`./assets/${img}`} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
            <div>
                ..
            </div>
        </MediaObject>
    );
}
 
export default Fav;