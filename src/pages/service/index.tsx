// import React, { useEffect, useState } from "react";
// import { Button, Pagination } from "@mui/material";
// // import { Service } from "@modal";
// // import { ServiceTable } from "../../components/ui";
// import service from "../../service/service";
// // import { GetServiceParams, ServiceData } from "../../types";

// const Index: React.FC = () => {
//   //   const [open, setOpen] = useState<boolean>(false);
//   //   const [data, setData] = useState<ServiceData[]>([]);
//   //   const [params, setParams] = useState({
//   //     limit: 10,
//   //     page: 1,
//   //   });
//   //   const [totalPages, setTotalPages] = useState<number>(0);

//   const getData = async () => {
//     try {
//       const response = await service.get_service({ page: 1, limit: 10 });
//       console.log(response);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   //   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   //     setParams((prevParams) => ({
//   //       ...prevParams,
//   //       page: value,
//   //     }));
//   //   };

//   return (
//     <>
//       {/* <Service open={open} handleClose={() => setOpen(false)} /> */}
//       <div className="flex flex-col gap-3">
//         <div className="flex justify-end">
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={() => setOpen(true)}
//           >
//             Add
//           </Button>
//         </div>
//         {/* <ServiceTable data={data} /> */}
//         {/* <Pagination
//           count={totalPages}
//           page={params.page}
//           onChange={handleChange}
//         /> */}
//       </div>
//     </>
//   );
// };

// export default Index;
