import {
  useGetAllOrders,
  useUpdateDelivered,
} from '@/api/orders/order.queries';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { pageLevelLocalization } from '@/constants/localization';
import { Box } from '@mui/material';
import Image from 'next/image';

const DeliveryOrdersIndex = () => {
  const { data } = useGetAllOrders();
  const { mutate: updateDeliverStatus } = useUpdateDelivered();
  console.log(data);

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mt: 6 }}>
        <Table dir="rtl">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right w-1/3">
                {pageLevelLocalization.delivered.id}
              </TableHead>
              <TableHead className="text-right w-1/3">
                {pageLevelLocalization.delivered.prdImg}
              </TableHead>
              <TableHead className="text-right w-1/3">
                {pageLevelLocalization.delivered.statusDeliver}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">
                    ORD-{item?.userId}
                  </TableCell>
                  <TableCell className="flex gap-1">
                    {item?.books.map((book) => (
                      <Image
                        width={50}
                        height={50}
                        className="rounded-lg"
                        src={book.imgURL}
                        alt=""
                      />
                    ))}
                  </TableCell>
                  <TableCell>
                    <Switch
                      dir="ltr"
                      checked={item.delivered}
                      onCheckedChange={(checked) =>
                        updateDeliverStatus({ id: item.id, delivered: checked })
                      }
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default DeliveryOrdersIndex;
