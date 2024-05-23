import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

function Musics() {
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Paragra = styled.p`
    margin-left: 250px;
  `;
  useEffect(() => {
    if (id && token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((d) => {
          setData(d);
          console.log(d);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Fetch error:", err);
          setError(err);
          setLoading(false);
        });
    }
  }, [id, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Paragra>{data.id}</Paragra>
    </div>
  );
}
export default Musics;
