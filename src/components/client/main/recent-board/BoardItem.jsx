import styled from "styled-components";

const Item = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  margin-right: 10px;
  padding: 5px;
`;

const TopBox = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: 5px;

  .board-img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }  
`;

const BottomBox = styled.div`
  width: 100 %;
  height: 20 %;
  border-top: 1px solid #7ca2eb;

  .info-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .board-label{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .hit-label{
    color: #f0a779;
  }
  .writer-label{
    color: #555;
  }
`;

function ShopItem({ data, index }) {
  return <Item style={{ left: `${31 * (index)}% ` }}>
    <TopBox>
      <img className="board-img" src="./img/main.jpg" alt="..." />
    </TopBox>
    <BottomBox>
      <div className="info-box">
        <label className="board-label">{data.name}</label>
        <label className="hit-label">({data.hit})</label>
      </div>
      <label className="bottom-label">{"작성자" + " " + data.writer}</label>
    </BottomBox>
  </Item>
}

export default ShopItem;