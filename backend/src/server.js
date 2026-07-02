import "./config/env.js";
import app from "./app.js";

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`SNG Maintenance backend running on port ${port}`);
});
