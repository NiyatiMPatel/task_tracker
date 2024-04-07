import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../App";

const useMutationData = (mutationFn: any, onSuccessCallback: any) => {
  const {
    mutate,
    isPending: pending,
    isError,
    error,
  } = useMutation({
    mutationFn,
    onSuccess: () => {
      onSuccessCallback();
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { mutate, pending, isError, error };
};

export default useMutationData;
