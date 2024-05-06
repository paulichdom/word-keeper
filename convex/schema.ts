import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  dictionary: defineTable({
    word: v.string(),
    part_of_speech: v.string(),
    definition: v.string(),
  }),
});