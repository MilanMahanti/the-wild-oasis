import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numCabins, numDays }) {
  const numBookings = bookings.length;

  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const totalCheckins = confirmedStays.length;

  const occupancyRate =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numCabins * numDays);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        title="Bookings"
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
        title="Sales"
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        value={totalCheckins}
        title="Check ins"
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupancyRate * 100)}%`}
        title="Occupancy rate"
        color="yellow"
      />
    </>
  );
}

export default Stats;
