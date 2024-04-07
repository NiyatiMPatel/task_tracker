import { http, HttpResponse } from "msw";
import listMock from "./listMock.json";

export const handlers = [
  http.get("/todos", () => {
    // Construct a JSON response with the list of all todos
    // as the response body.
    return HttpResponse.json(listMock);
  }),
];
