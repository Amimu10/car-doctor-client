import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { Link } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {credentials: "include"}) 
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this booking");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // alert("order confirmed");
          //  const remaining = bookings.filter(booking => booking._id !== id);
          //  const updated = bookings.find(booking => booking._id === id);
          //     updated.status = "confirm";
          //  const newBookings = {updated, ...remaining};
          //  setBookings(newBookings);
           const updatedBookings = bookings.map((booking) =>
            booking._id === id ? { ...booking, status: "confirm" } : booking
          );
          setBookings(updatedBookings);
        }
      });
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full lg:h-[300px] h-[200px] object-cover bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"
          src="https://source.unsplash.com/featured/?car-service"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-md">
          <h3 className="lg:text-4xl text-2xl font-semibold">Cart Details</h3>
          <Link to="/" className="text-[#FF3811] font-bold text-base">
            Back Home
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
