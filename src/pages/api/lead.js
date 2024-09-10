/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
//@ts-nocheck
// pages/api/lead.js
import { Client } from "@notionhq/client";
import { v4 } from "uuid";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST request logic
    const { name, phone } = req.body;
    console.log(`Received lead: ${name} @ ${phone}`);

    const stuff = await notion.search({
      filter: {
        property: "object",
        value: "database",
      },
    });

    console.log("Creating lead in Notion...", stuff);

    const entryData = {
      Date: { date: { start: new Date().toISOString() } },
      Phone: { phone_number: phone },
      Name: { rich_text: [{ text: { content: name } }] }, // Changed to rich_text
      Key: { title: [{ text: { content: v4() } }] }, // Assuming "Key" is the title of the database
    };

    const response = await notion.pages.create({
      parent: {
        database_id: "3f15448d-400c-4222-b6ef-59a18a2f23c4",
      },
      //@ts-ignore
      properties: entryData,
    });

    res.status(200).json({ message: "Lead created successfully!" });
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
