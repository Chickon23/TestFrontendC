import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://dev.orchardcms.stellenanzeigen.de/blue/api/content/4k7jkcmhf3t734c832kap36qcy",
    (req, res, ctx) => {
      // ...and respond with this mocked response.
      return res(ctx.json({}));
    }
  ),
];
