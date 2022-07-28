import app from "./app";
const PORT: Number | String = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
});
