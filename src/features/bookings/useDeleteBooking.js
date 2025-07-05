import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isBookingDeleting } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries(["bookings"]);
    },

    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isBookingDeleting };
}
