import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaBook,
  FaPlusSquare,
  FaHeart,
} from "react-icons/fa";

const SidebarWrapper = styled.div`
  width: 17%;
  height: 5500px;
  background-color: #000;
  color: #b3b3b3;
  position: fixed;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #b3b3b3;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    font-weight: bold;
  }

  svg {
    margin-right: 10px;
  }
`;

const PlaylistItem = styled.div`
  color: #b3b3b3;
  font-size: 14px;
  margin: 5px 0;

  &:hover {
    color: #fff;
  }
`;

function LeftSidebar() {
  return (
    <SidebarWrapper>
      <Section>
        <StyledLink to="/" activeClassName="active">
          <FaHome />
          Home
        </StyledLink>
        <StyledLink to="/search" activeClassName="active">
          <FaSearch />
          Search
        </StyledLink>
        <StyledLink to="/your-library" activeClassName="active">
          <FaBook />
          Your Library
        </StyledLink>
        <StyledLink to="/create-playlist" activeClassName="active">
          <FaPlusSquare />
          Create Playlist
        </StyledLink>
        <StyledLink to="/liked-songs" activeClassName="active">
          <FaHeart style={{ color: "purple" }} />
          Liked Songs
        </StyledLink>
      </Section>
      <Section>
        <PlaylistItem>Chill Mix</PlaylistItem>
        <PlaylistItem>Insta Hits</PlaylistItem>
        <PlaylistItem>Your Top Songs 2021</PlaylistItem>
        <PlaylistItem>Mellow Songs</PlaylistItem>
        <PlaylistItem>Anime Lofi & Chillhop Music</PlaylistItem>
        <PlaylistItem>BG Afro “Select” Vibes</PlaylistItem>
        <PlaylistItem>Afro “Select” Vibes</PlaylistItem>
        <PlaylistItem>Happy Hits!</PlaylistItem>
        <PlaylistItem>Deep Focus</PlaylistItem>
        <PlaylistItem>Instrumental Study</PlaylistItem>
        <PlaylistItem>OST Compilations</PlaylistItem>
        <PlaylistItem>Nostalgia for old souled millennials</PlaylistItem>
        <PlaylistItem>Mixed Feelings</PlaylistItem>
      </Section>
    </SidebarWrapper>
  );
}

export default LeftSidebar;
