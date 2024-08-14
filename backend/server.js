import app from "./index.js";

app.listen(process.env.PORT, () => {

console.log(`SERVER RUNNING AT PORT ${process.env.PORT}`);

});