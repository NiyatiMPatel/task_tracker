import { useQuery } from "@tanstack/react-query";

const useQueryData = <T,>(
  queryKey: string[],
  queryFn: () => Promise<T>
): {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: any;
} => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, isLoading, isError, error };
};

export default useQueryData;
