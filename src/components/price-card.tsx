import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Check, Coins } from 'lucide-react';
import { ServicesDataType } from '@/mocks/services';

type DataType = {
  data: ServicesDataType;
};

export default function PriceCard({ data }: DataType) {
  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle className="text-xl">{data.name}</CardTitle>
        <CardAction>
          <Badge className="bg-main/20 text-main">{data.role}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div>
          <h5 className="text-md font-medium">What is included?</h5>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
            {data.included.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <Check className="text-main" />
                <span className="text-sm font-normal text-gray-500">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="p-2 rounded-lg bg-main/10">
            <p className="text-sm text-main">{data?.description}</p>
          </div>
          <div className="flex items-end gap-2 mt-5">
            <span className="text-5xl font-bold">{data.discountedPrice}$</span>
            <span className="text-lg font-medium text-gray-400">
              <del>{data.price}$</del> /{' '}
              <span className="text-black">{data?.type}</span>
            </span>
          </div>

          {data.name === 'Backlink Credits' && (
            <div className="flex items-center gap-1 mt-3">
              <div className="inline-flex items-center gap-1">
                <div className="rounded-full bg-main/30 w-8 h-8 p-1 flex items-center justify-center">
                  <Coins className="text-main" size={18} />
                </div>{' '}
                <span className="text-md font-semibold">400 credits</span>
              </div>{' '}
              / <span className="text-gray-400 text-sm">monthly</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="min-h-12 hover:bg-main-hover bg-main w-full"
        >
          Upgrade To Premium <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
