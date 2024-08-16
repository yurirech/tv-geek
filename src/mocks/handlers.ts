import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/test", () => {
    return HttpResponse.json({
      id: 1,
      firstName: "Yuri",
      lastName: "Rech",
    });
  }),
];
