import express from "express";
import { formatJsonApiResponse } from "../utils/jsonApiFormatter.js";

const router = express.Router();

const users = [
  { id: "1", name: "Mohamed", email: "mohamed@example.com" },
  { id: "2", name: "Sara", email: "sara@example.com" },
];

// GET /api/users/plain → Custom REST response
router.get("/plain", (req, res) => {
  res.json(users);
});

// GET /api/users/jsonapi → JSON:API-compliant response
router.get("/jsonapi", (req, res) => {
  const jsonApiUsers = users.map((user) =>
    formatJsonApiResponse("users", user.id, {
      name: user.name,
      email: user.email,
    })
  );
  res.json({ data: jsonApiUsers });
});

export default router;
