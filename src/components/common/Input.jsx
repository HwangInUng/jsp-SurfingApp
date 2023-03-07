import styled from "styled-components";

const RegistInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 20px;
  border: 1px solid lightGray;
  border-radius: 10px;

  * {
    transition: all ease-in 0.5s;
  }

  outline: none;

  :focus{
    box-shadow: 0px 0px 5px #7ca2eb;
    background: none;
    background-position: 2%;
  }
`;

function Input(props) {
  return <RegistInput
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    // 도, 시, 군, 구에 대한 주소 출력
    value={props.value}
    onChange={props.onChange}
    // readOnly가 적용된 태그에 한해서만 적용
    readOnly={props.readOnly !== undefined ? props.readOnly : null}
  />
}

export default Input;