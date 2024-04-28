import "server-only";

import { Client } from "@notionhq/client";
import React from "react";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchCategories = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_CATEGORIES_DATABASE_ID!,
  });
});

export const fetchQuestions = React.cache(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_QUESTIONS_DATABASE_ID!,
  });
});
