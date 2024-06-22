import { useQuery } from '@tanstack/react-query';
import { getPublishersPhoto } from './publisher.api';

export const useGetPublisher = () => {
  return useQuery({
    queryKey: ['publishers'],
    queryFn: () => getPublishersPhoto(),
  });
};
