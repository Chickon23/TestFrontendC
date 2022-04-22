import { rest } from "msw";

export const handlers = [
  // Capture a GET /user/:userId request,
  rest.get("api/contenttypes/config", (req, res, ctx) => {
    // ...and respond with this mocked response.
    return res(ctx.json({}));
  }),
];