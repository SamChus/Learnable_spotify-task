import styled from "styled-components";
import { FaSoundcloud } from "react-icons/fa";


const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    width: 90%;
    margin: 0px 10px;
    white-space: nowrap;
    font-size: 15px;
    cursor: pointer;
    font-weight: 550;
    overflow: scroll;

    &:hover{
        transform: scale(1.02);
        background: #fff;
        border-radius: 8px;
        box-shadow: -2px 12px 18px #ccc;
    }

    svg{
        
    }

`

const MusicInfo = ({title,artist,time,album}) => {
    return ( 
        <Flex>
            <FaSoundcloud size={10}/>
            <p>{title}</p>
            <p>{artist}</p>
            <p>{time}</p>
            <p>{album}</p>
        </Flex>
     );
}
 
export default MusicInfo;