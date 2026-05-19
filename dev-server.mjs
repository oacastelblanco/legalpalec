import { createServer } from "vite";

const server = await createServer({
  server: {
    host: "127.0.0.1",
    port: 5183,
    strictPort: true,
  },
});

await server.listen();
server.printUrls();

process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

setInterval(() => {}, 1 << 30);
