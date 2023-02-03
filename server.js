import path from "node:path";
import { fileURLToPath } from "node:url";
import Fastify from "fastify";
import * as fstat from "@fastify/static";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });
fastify.register(fstat, {
  root: path.join(__dirname, "/public"),
  prefix: "/public/",
});

fastify.get("/", async (request, reply) => {
  return reply.sendFile("index.html");
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
