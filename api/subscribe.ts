import type { VercelRequest, VercelResponse } from "@vercel/node";

const BREVO_LIST_ID = 70;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS - allow only from our own origin in production
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY not configured");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const { name, email } = req.body || {};

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (
    !email ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: email.trim(),
        attributes: {
          FIRSTNAME: name.trim(),
        },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const data = await brevoRes.json();
      console.error("Brevo API error:", data);
      return res
        .status(502)
        .json({ error: data.message || "Failed to subscribe" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
