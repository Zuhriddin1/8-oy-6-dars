import styled from "@emotion/styled";
const SidebarContainer = styled.div`
  width: 300px;
  background-color: #121212;
  color: #ffffff;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
`;
const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const FriendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #555;
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FriendName = styled.div`
  font-size: 16px;
`;

const SettingsSection = styled.div`
  margin-top: 20px;
`;

const SettingsButton = styled.button`
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 35px;
  width: 100%;
`;

const RightSidebar = () => {
  return (
    <SidebarContainer>
      <Header>Friend Activity</Header>
      <FriendList>
        <FriendItem>
          <Avatar />
          <FriendInfo>
            <FriendName>User</FriendName>
          </FriendInfo>
        </FriendItem>
        <FriendItem>
          <Avatar />
          <FriendInfo>
            <FriendName>User</FriendName>
          </FriendInfo>
        </FriendItem>
        <FriendItem>
          <Avatar />
          <FriendInfo>
            <FriendName>User</FriendName>
          </FriendInfo>
        </FriendItem>
      </FriendList>
      <SettingsSection>
        <p>
          Go to Settings {">"} Social and enable "Share my listening activity on
          Spotify." You can turn this off at any time.
        </p>
        <SettingsButton>Settings</SettingsButton>
      </SettingsSection>
    </SidebarContainer>
  );
};

export default RightSidebar;
