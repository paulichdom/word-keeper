import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('dictionary').collect();
  },
});

interface SuccessResponse {
  success: true;
  message: string;
  data: {
    word: string;
    part_of_speech: string;
    definition: string;
  };
}

interface ErrorResponse {
  success: boolean;
  message: string;
}

export type MutationResponse = SuccessResponse | ErrorResponse;

export const send = mutation({
  args: {
    word: v.string(),
    part_of_speech: v.string(),
    definition: v.string(),
  },
  handler: async (
    ctx,
    { word, part_of_speech, definition }
  ): Promise<MutationResponse> => {
    try {
      const dbResult = await ctx.db.insert('dictionary', {
        word,
        part_of_speech,
        definition,
      });
      console.log(dbResult);
      return {
        success: true,
        message: 'Entry added successfully',
        data: { word, part_of_speech, definition },
      };
    } catch (error) {
      console.error('Failed to add dictionary entry:', error);
      return {
        success: false,
        message: `Error adding entry: ${error}`,
      };
    }
  },
});
