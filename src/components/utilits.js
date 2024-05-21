async function getToken() {
  const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        import.meta.env.VITE_CLIENT_ID + ":" + import.meta.env.VITE_SECRET_KEY
      )}`,
    },
    body: "grant_type=client_credentials",
  });
  const auth = await resp.json();
  console.log(getFormattedDateOneHourLater());
  const expireDate = getFormattedDateOneHourLater();
  localStorage.setItem("token", auth.access_token);
  localStorage.setItem("expireDate", expireDate);
}
function getFormattedDateOneHourLater() {
  const now = new Date();
  now.setHours(now.getHours() + 1);
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
export { getToken };
