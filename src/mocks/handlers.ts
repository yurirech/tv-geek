import { http, HttpResponse } from "msw";

// Checkout browser.ts to check how the setUp is done as well.
// Also make sure you have the file mockServiceWorker.js in you public folder.
// If the command provided by the docs don't work, you can copy the file from the node_modules/msc

export const handlers = [
  http.get("/api/test", () => {
    return HttpResponse.json(
      {
        data: { firstName: "Yuri", lastName: "Rech" },
        meta: [{}],
      },
      {
        status: 200,
      },
    );
  }),
];
