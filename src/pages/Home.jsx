import styled from "@emotion/styled";
import HomeHero from "../components/HomeHero";
import YourPlaylist from "../components/YourPlaylist";
import PlaylistsHero from "../components/PlaylistsHero";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { create } from "../redux/authSlicer";
import { getToken } from "../components/utilits";
const HomeWrapper = styled.div`
  margin-left: 200px;
  width: 66%;
`;
const Wrapper = styled.div`
  display: grid;
  margin-left: 30px;
  grid-template-columns: repeat(3, 1fr);
`;
function Home() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setFeatured(data.playlists.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getToken()
        .then((res) => {
          dispatch(create(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, dispatch]);
  return (
    <HomeWrapper>
      <HomeHero />
      <PlaylistsHero />
      <Wrapper>
        {featured.length > 0 &&
          featured.map((el, index) => <YourPlaylist data={el} key={index} />)}
      </Wrapper>
    </HomeWrapper>
  );
}
export default Home;