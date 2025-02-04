import { Table } from "flowbite-react";

export function AppTable({data,header}) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>{
            header && header?.map(h=><Table.HeadCell key={h}>{h}</Table.HeadCell>)
            }
        </Table.Head>
        <Table.Body className="divide-y">
            {
                data?.map(p=><Table.Row key={p} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    {
                        Array.from({length:header.length},(data,index)=>{
                            return(
                                <Table.Cell key={p._id} className="text-black whitespace-nowrap font-medium  dark:text-white">
                                    {p.Product[header[index]]}
                                </Table.Cell>
                            )})}
                    </Table.Row>)
            }
        </Table.Body>
      </Table>
    </div>
  );
}
