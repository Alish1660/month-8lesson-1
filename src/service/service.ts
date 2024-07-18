// import http from "./config";
// import { Request } from "@auth-type";
// const services: Request = {
//   get_services: () =>
//     http.get("/service/all", { params: { page: 1, limit: 10 } }),
//   //   create_service: (data) => request.post("/service", data),
//   //   delete_service: (id) => request.delete(`/service?id=${id}`),
//   //   update_service: (data) => request.put("/service", data),
// };

// export default services;

// src/service.ts

// src/service.ts

import http from "./config";
import { Request } from "@service-type";

const service: Request = {
  get_service: () =>
    http.get("/service/all?", { params: { page: 1, limit: 10 } }),
};

export default service;
