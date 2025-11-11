import React from 'react';
import { InvoiceDataTable } from './data-table';
import { InvoiceColumns } from './columns';
import { invoices } from '@/mocks/invoices';

const Invoices = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Invoices</h2>
        <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          mollitia nulla corrupti repellat officiis eaque necessitatibus nihil,
          consequatur vel maiores tenetur doloremque voluptate odit asperiores.
        </p>
      </div>
      <div className="mt-5">
        <InvoiceDataTable columns={InvoiceColumns} data={invoices} />
      </div>
    </div>
  );
};

export default Invoices;
