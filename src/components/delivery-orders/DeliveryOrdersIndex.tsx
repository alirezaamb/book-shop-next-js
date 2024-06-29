import { useGetAllOrders } from '@/api/orders/order.queries';

const DeliveryOrdersIndex = () => {
  const { data } = useGetAllOrders();
  console.log(data);

  return <div>DeliveryOrdersIndex</div>;
};

export default DeliveryOrdersIndex;
