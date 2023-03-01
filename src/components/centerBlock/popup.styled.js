import styled from 'styled-components'

const PopupList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 248px;
  height: 305px;
  margin-top: 10px;
  text-align: left;
  line-height: 40px;
  padding-top: 36px;
  padding-left: 34px;
  font-weight: 400;
  font-size: 20px;
  background: #313131;
  border-radius: 12px;

  &li:hover {
    cursor: pointer;
    color: #d9b6ff;
    text-decoration: underline 2px;
  }
`
export default PopupList
