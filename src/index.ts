import app from "./app";
import { AppDataSource } from "./db/connection";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database: connected...");
    app.listen(3000, () => {
      console.log("http server: listening...");
    });
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

main();
