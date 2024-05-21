import styled from "@emotion/styled";
import Boy from "../assets/boy.svg";
import Boydoq from "../assets/normall.svg";
import team from "../assets/five.svg";
import four from "../assets/dailly.svg";
import girl from "../assets/gir;.svg";
import girls from "../assets/girls.svg";
const HeroContainer = styled.div`
  background: linear-gradient(135deg, #2a0e9a, #1b006a);
  color: #ffffff;
  padding: 20px;
  width: 100%;
  margin-left: 50px;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;
const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MixGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;
const MixCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MixImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const MixInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MixTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`;
const mixes = [
  { title: "Chill Mix", image: Boy },
  { title: "Daily Mix 1", image: girl },
  { title: "Daily Mix 1", image: Boydoq },
  { title: "Folk & Acoustic Mix", image: girls },
  { title: "Daily Mix 5", image: team },
  { title: "Daily Mix 4", image: four },
];
function HomeHero() {
  return (
    <HeroContainer>
      <Header>
        <Title>Good afternoon</Title>
        <NavButtons>
          <NavButton>&lt;</NavButton>
          <NavButton>&gt;</NavButton>
        </NavButtons>
      </Header>
      <MixGrid>
        {mixes.map((mix) => (
          <MixCard key={mix.title}>
            <MixImage src={mix.image} alt={mix.title} />
            <MixInfo>
              <MixTitle>{mix.title}</MixTitle>
            </MixInfo>
          </MixCard>
        ))}
      </MixGrid>
    </HeroContainer>
  );
}
export default HomeHero;
