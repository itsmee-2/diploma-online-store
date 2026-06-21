import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { z } from "zod";
import { createHash } from "crypto";

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/register", async (req, res) => {
    try {
      const parsed = insertUserSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid input" });
      }
      const { username, password } = parsed.data;
      const existing = await storage.getUserByUsername(username);
      if (existing) {
        return res.status(409).json({ message: "Username already taken" });
      }
      const user = await storage.createUser({
        username,
        password: hashPassword(password),
      });
      return res.status(201).json({ id: user.id, username: user.username });
    } catch {
      return res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/login", async (req, res) => {
    try {
      const schema = z.object({ username: z.string(), password: z.string() });
      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid input" });
      }
      const { username, password } = parsed.data;
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== hashPassword(password)) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      return res.status(200).json({ id: user.id, username: user.username });
    } catch {
      return res.status(500).json({ message: "Server error" });
    }
  });

  return httpServer;
}
