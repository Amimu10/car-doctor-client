import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const booking = {
      customerName: name,
      email,
      img,
      date,
      service_id: _id,
      service: title,
      price: price,
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Service book successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
      });
   
  };
  return (
    <div>
      <div className="relative">
        <img
          className="w-full lg:h-[300px] h-[200px] object-cover "
          src={img}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h3 className="lg:text-4xl text-2xl font-semibold">{title}</h3>
          <h3 className="text-[#FF3811] text-left lg:text-4xl text-2xl font-bold">
            Booking Now
          </h3>
        </div>
      </div>

      <div className="bg-[#F3F3F3]">
        <div className="hero-content">
          <div className=" w-full">
            <form onSubmit={handleOrder} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    defaultValue={user?.displayName}
                    name="name"
                    className="input input-bordered focus-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    defaultValue={user?.email}
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Amaoun</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={"$ " + price}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#FF3811] rounded-md p-2 text-white text-lg font-semibold">
                  Order Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
