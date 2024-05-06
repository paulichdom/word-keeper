import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("dictionary").collect();
  },
});

export const send = mutation({
  args: {word: v.string(), part_of_speech: v.string(), definition: v.string()},
  handler: async (ctx, {word, part_of_speech, definition}) => {
    await ctx.db.insert('dictionary', {word, part_of_speech, definition})
  }
})