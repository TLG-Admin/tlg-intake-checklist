// netlify/functions/airtable.js
// Server-side proxy for the TLG Client Intake checklist.
// Holds the Airtable token (AIRTABLE_TOKEN env var) so it is NEVER exposed to the browser.
// Clients can only toggle the "Done" field; nothing else is writable from the embed.
const BASE_ID = "app5L7ryHd3yqb7Js";
const TABLE_ID = "tblnEx2oQXf8enweM";
const VIEW = "Checklist";
const AT = "https://api.airtable.com/v0";

exports.handler = async (event) => {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return resp(500, { error: "Missing AIRTABLE_TOKEN env var" });
  const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

  try {
    if (event.httpMethod === "GET") {
      let records = [], offset;
      do {
        const url = new URL(`${AT}/${BASE_ID}/${TABLE_ID}`);
        url.searchParams.set("view", VIEW);
        url.searchParams.set("pageSize", "100");
        if (offset) url.searchParams.set("offset", offset);
        const r = await fetch(url, { headers });
        if (!r.ok) return resp(r.status, { error: await r.text() });
        const j = await r.json();
        records = records.concat(j.records);
        offset = j.offset;
      } while (offset);
      return resp(200, { records });
    }

    if (event.httpMethod === "PATCH") {
      const body = JSON.parse(event.body || "{}");
      if (!body.id || typeof body.done !== "boolean")
        return resp(400, { error: "id and done(boolean) required" });
      const r = await fetch(`${AT}/${BASE_ID}/${TABLE_ID}/${body.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ fields: { Done: body.done } }),
      });
      if (!r.ok) return resp(r.status, { error: await r.text() });
      return resp(200, await r.json());
    }

    return resp(405, { error: "Method not allowed" });
  } catch (e) {
    return resp(500, { error: String(e) });
  }
};

const resp = (statusCode, obj) => ({
  statusCode,
  headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  body: JSON.stringify(obj),
});
