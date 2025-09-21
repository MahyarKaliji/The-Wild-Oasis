import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat"
import { formatCurrency } from "../../utils/helpers";

export default function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    //  1.
    const numBookings = bookings.length;

    //  2.
    const sales = bookings.reduce((total, booking) => total + booking.totalPrice, 0)

    //  3.
    const checkins = confirmedStays.length;

    //  4.
    const occupation = confirmedStays.reduce((totalNights, booking) => totalNights + booking.numNights, 0) / (numDays * cabinCount)

    return (
        <>
            <Stat
                title="Bookings"
                color="blue"
                icon={<HiOutlineBriefcase />}
                value={numBookings} />
            <Stat
                title="Stays"
                color="green"
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat
                title="Check ins"
                color="indigo"
                icon={<HiOutlineCalendarDays />}
                value={checkins}
            />
            <Stat
                title="Occupancy rate"
                color="yellow"
                icon={<HiOutlineChartBar />}
                value={Math.round(occupation * 100) + "%"}
            />
        </>
    )
}
