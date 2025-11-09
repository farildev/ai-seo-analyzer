import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save, Scan } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const LinkingConfiguration = () => {
  return (
    <div className="p-5">
      <div className="flex lg:flex-row flex-col lg:items-center items-start gap-5 justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Site Source Configuration</h2>
          <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            mollitia nulla corrupti repellat officiis eaque necessitatibus
            nihil, consequatur vel maiores tenetur doloremque voluptate odit
            asperiores.
          </p>
        </div>
        <Button className="bg-main py-3 px-6 text-sm font-normal text-white hover:bg-main-hover text-nowrap border border-main rounded-md">
          <Save />
          Save Configuration
        </Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        <div className="border border-custom-border p-5 rounded-lg flex flex-col gap-3 h-fit">
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-400">Choose Link Source</Label>
            <Select>
              <SelectTrigger className="w-full shadow-none min-h-12">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-gray-400">Choose Link Source</Label>
            <Input
              className="shadow-none min-h-12"
              placeholder="Sitemap URL..."
            />
          </div>
          <Button className="bg-main hover:bg-main-hover h-12">
            Scan Links
          </Button>
        </div>
        <div className="p-5 rounded-lg border border-custom-border">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xl">
              <Scan size={20} />
              Scanned Links
            </div>
            <span className="text-md font-medium text-main">
              25 Links found
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-7">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 border-custom-border py-1"
              >
                <h5 className="font-semibold text-md leading-normal">
                  Resumebuilder.so home page
                </h5>
                <p className="text-sm font-normal text-main">
                  https://resumebuilder.so/
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkingConfiguration;
