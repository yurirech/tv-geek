import { http, HttpResponse } from "msw";

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
