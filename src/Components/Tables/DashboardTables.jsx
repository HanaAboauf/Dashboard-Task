import { Table } from "flowbite-react";
import watch from "../../assets/image/watch.png"
import photo2 from "../../assets/image/microsoftSquare.png"

export function DashboardTables() {
  const tableHeaders1=["ID","Name","Address","Date","Type","Status"];

  const tableData1 = [
    { ID: "00001", Name: "Christine Brooks", Address: "089 Kutch Green Apt. 448", Date: "14 Feb 2019", Type: "Electric", Status: "Completed" },
    { ID: "00002", Name: "Christine Brooks", Address: "089 Kutch Green Apt. 448", Date: "14 Feb 2019", Type: "Electric", Status: "Processing" },
    { ID: "00003", Name: "Christine Brooks", Address: "089 Kutch Green Apt. 448", Date: "14 Feb 2019", Type: "Electric", Status: "Rejected" },
    { ID: "00004", Name: "Christine Brooks", Address: "089 Kutch Green Apt. 448", Date: "14 Feb 2019", Type: "Electric", Status: "Completed" },
    { ID: "00005", Name: "Christine Brooks", Address: "089 Kutch Green Apt. 448", Date: "14 Feb 2019", Type: "Electric", Status: "Processing" },
  ];
  
  const tableHeaders2=["Image","Product Name","Category","Price","Piece","Available Color","Action"];
  return (
    <div className=" h-screen bg-myGray pt-10">
      <div className="container w-92%">
      <h1 className="text-4xl font-semibold pb-10 ms-10">Tables</h1>
      <div className="h-[2px] bg-gray-200 ms-10 mb-7"></div>     
      <Table hoverable className="ms-10 ">
        <Table.Head>
          {
            tableHeaders1.map(h=><Table.HeadCell key={h}>{h}</Table.HeadCell>)
          }
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             00001
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell >
            <div className="rounded-md bg-green-200 text-green-500 py-1 text-center w-24 font-semibold">Completed</div>
               
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             00002
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell >
            <div className="rounded-md bg-purple-200 text-purple-500 py-1 text-center w-24 font-semibold">Processing</div>
              
               
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             00003
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell >
              <div className="rounded-md bg-red-200 text-red-500 py-1 text-center w-24 font-semibold">Rejected</div>
               
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             00004
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell >
              <div className="rounded-md bg-green-200 text-green-500 py-1 text-center w-24 font-semibold">Completed</div>
               
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             00005
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell >
              <div className="rounded-md bg-purple-200 text-purple-500 py-1 text-center w-24 font-semibold">Processing</div>
               
            </Table.Cell>
          </Table.Row>
     

        </Table.Body>
      </Table>
      <div className="h-[2px] bg-gray-200 ms-10 mb-10 mt-10 "></div>  
      <Table hoverable className="ms-10 mt-5 ">
        <Table.Head>
          {
            tableHeaders2.map(h=><Table.HeadCell key={h}>{h}</Table.HeadCell>)
          }
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             <img src={watch} alt="samrt watch" className="" />
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell className="text-black flex flex-row gap-2 pt-[65px]">
              <div className="rounded-full bg-black h-4 w-4"></div>
              <div className="rounded-full bg-gray-500 h-4 w-4"></div>
              <div className="rounded-full bg-red-400 h-4 w-4"></div>
            </Table.Cell>
            <Table.Cell >
              <div className=" bg-myGrayTwo border rounded-lg w-20 py-2 hover:cursor-pointer"><i className="fa-regular fa-pen-to-square pe-2 ps-3"></i> |<i className="fa-regular fa-trash-can ps-2 text-red-700"></i></div>
               
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <img src={photo2} alt="samrt watch" className="" />
            </Table.Cell>
            <Table.Cell className="text-black">Christine Brooks</Table.Cell>
            <Table.Cell className="text-black">089 Kutch Green Apt. 448</Table.Cell>
            <Table.Cell className="text-black">14 Feb 2019</Table.Cell>
            <Table.Cell className="text-black">Electric</Table.Cell>
            <Table.Cell className="text-black flex flex-row gap-2 pt-[65px]">
              <div className="rounded-full bg-black h-4 w-4"></div>
              <div className="rounded-full bg-red-400 h-4 w-4"></div>
              <div className="rounded-full bg-blue-500 h-4 w-4"></div>
              <div className="rounded-full bg-yellow-400 h-4 w-4"></div>
            </Table.Cell>
            <Table.Cell >
            <div className=" bg-myGrayTwo border rounded-lg w-20 py-2 hover:cursor-pointer"><i className="fa-regular fa-pen-to-square pe-2 ps-3"></i> |<i className="fa-regular fa-trash-can ps-2 text-red-700"></i></div>        
            </Table.Cell>
          </Table.Row>

     

        </Table.Body>
      </Table>
      </div>

    </div>
  );
}
