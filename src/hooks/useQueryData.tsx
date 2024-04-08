import { useQuery } from "@tanstack/react-query";

const useQueryData = <T,>(
  queryKey: string[],
  queryFn: () => Promise<T>
): {
  data: T | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: any;
} => {
  return useQuery({
    queryKey,
    queryFn,
  });
};

export default useQueryData;
