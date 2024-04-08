import { http, HttpResponse } from "msw";
import listMock from "./listMock.json";
import { baseUrl } from "../../utils/axios-interceptors";

export const handlers = [
  http.get("/todos", ({ request }) => {
    // Construct a JSON response with the list of all todos
    // console.log("Handler.ts: ", request.method, request.url);
    // as the response body.
    return HttpResponse.json([listMock]);
  }),
];
