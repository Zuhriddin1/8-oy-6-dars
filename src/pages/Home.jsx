import styled from "@emotion/styled";
import HomeHero from "../components/HomeHero";
import YourPlaylist from "../components/YourPlaylist";
function Home() {
  const HomeWrapper = styled.div`
    width: 66%;
  `;
  return (
    <HomeWrapper>
      <HomeHero></HomeHero>
      <YourPlaylist></YourPlaylist>
    </HomeWrapper>
  );
}
export default Home;
