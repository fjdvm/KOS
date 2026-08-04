import { auth, toNextJsHandler } from "auth";

export const { GET, POST } = toNextJsHandler(auth);
