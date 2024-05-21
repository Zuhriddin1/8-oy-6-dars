import styled from "@emotion/styled";
function YourPlaylist() {
  const WrapperDiv = styled.div`
    padding-left: 55px;
    padding-top: 50px;
  `;
  const TitleTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <WrapperDiv>
      <TitleTop>
        <h2>Your top mixes</h2>
        <span>SEE ALL</span>
      </TitleTop>
      <div></div>
    </WrapperDiv>
  );
  }
export default YourPlaylist;