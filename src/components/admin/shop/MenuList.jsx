import styled from "styled-components";
import MenuItem from "./MenuItem";
import Bt from "../../common/Bt";
import { useState } from "react";
import MenuForm from "./MenuForm";

const ListContainer = styled.div`
  width: 70%;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 10px auto;
  
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .auto{
    margin-top: 20px;
    text-align: center;
  }

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

function MenuList({ shopIdx }) {
  const [regist, setRegist] = useState(false);

  return (!regist ? //등록하기 버튼클릭 시 등록 UI 출력
    <ListContainer>
      <MenuItem shopIdx={shopIdx} />
      <div className="auto">
        <Bt
          btName="등록하기"
          onClick={() => setRegist(true)}
        />
      </div>
    </ListContainer> :
    <MenuForm
      shopIdx={shopIdx}
      setRegist={setRegist}
    />
  )
}

export default MenuList;