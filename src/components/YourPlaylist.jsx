// import React, { useState } from "react";
// import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
// const TruncatedText = styled.p`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   max-width: 200px;
// `;
// const FullText = styled.p`
//   white-space: normal;
// `;
// function YourPlaylist(props) {
//   const navigate = useNavigate();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };
//   console.log(props);
//   const CardWrapper = styled.div`
//     margin-left: 55px;
//     border-radius: 5px;
//     margin-top: 20px;
//     padding: 21px;
//     background-color: #9992;
//     width: 225px;
//   `;
//   function handleClick() {
//     navigate(`playlists/${props.data.id}`);
//   }
//   return (
//     <div>
//       <CardWrapper>
//         <img
//           onClick={handleClick}
//           width={182}
//           src={props.data.images[0].url}
//           alt=""
//         />
//         <div>
//           <h2>{props.data.name}</h2>
//           {isExpanded ? (
//             <FullText>{props.data.description}</FullText>
//           ) : (
//             <TruncatedText>{props.data.description}</TruncatedText>
//           )}
//           <span
//             onClick={handleToggle}
//             style={{ color: "blue", cursor: "pointer" }}
//           >
//             {isExpanded ? "Read less" : "Read more"}
//           </span>
//         </div>
//       </CardWrapper>
//     </div>
//   );
// }
// export default YourPlaylist;
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const TruncatedText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
`;

const FullText = styled.p`
  white-space: normal;
`;

function YourPlaylist({ data }) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleClick = () => {
    navigate(`/playlists/${data.id}`);
  };
  const CardWrapper = styled.div`
    margin-left: 55px;
    border-radius: 5px;
    margin-top: 20px;
    padding: 21px;
    background-color: #9992;
    width: 225px;
  `;

  return (
    <div>
      <CardWrapper>
        <img
          onClick={handleClick}
          width={182}
          src={data.images[0].url}
          alt=""
        />
        <div>
          <h2>{data.name}</h2>
          {isExpanded ? (
            <FullText>{data.description}</FullText>
          ) : (
            <TruncatedText>{data.description}</TruncatedText>
          )}
          <span
            onClick={handleToggle}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isExpanded ? "Read less" : "Read more"}
          </span>
        </div>
      </CardWrapper>
    </div>
  );
}

export default YourPlaylist;
