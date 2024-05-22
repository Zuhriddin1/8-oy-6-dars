import styled from "@emotion/styled";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

function Layouts({ children }) {
  const LayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  const MainContent = styled.div`
    flex: 1;
    background: #282828;
    padding: 20px;
    color: white;
  `;
  return (
    <LayoutWrapper>
      <LeftSidebar />
      <MainContent>{children}</MainContent>
      <RightSidebar />
    </LayoutWrapper>
  );
}

export default Layouts;
