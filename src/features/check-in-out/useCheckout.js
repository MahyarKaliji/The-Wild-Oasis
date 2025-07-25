import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { checkout, isCheckingOut };
}
