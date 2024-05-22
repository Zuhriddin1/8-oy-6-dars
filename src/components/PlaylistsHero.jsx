import styled from "@emotion/styled";
function PlaylistsHero() {
  const WrapperDiv = styled.div`
    padding-left: 55px;
    padding-top: 50px;
    margin-left: 40px;
    width:900px;
  `;
  const TitleTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <div>
      <WrapperDiv>
        <TitleTop>
          <h2>Your top mixes</h2>
          <span>SEE ALL</span>
        </TitleTop>
      </WrapperDiv>
    </div>
  );
}

export default PlaylistsHero;
