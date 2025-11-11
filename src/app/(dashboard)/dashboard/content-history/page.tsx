import { DataTable } from './data-table';
import { ContentColumns } from './columns';
import { contentHistory } from '@/mocks/content-history-data';
const ContentHistory = () => {
  return (
    <div className="p-5">
      <div className="flex lg:flex-row flex-col lg:items-center items-start gap-5 justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Content History</h2>
          <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            mollitia nulla corrupti repellat officiis eaque necessitatibus
            nihil, consequatur vel maiores tenetur doloremque voluptate odit
            asperiores.
          </p>
        </div>
      </div>
      <div className="mt-10 w-full">
        <DataTable columns={ContentColumns} data={contentHistory} />
      </div>
    </div>
  );
};

export default ContentHistory;
