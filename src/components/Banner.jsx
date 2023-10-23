import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
// import img5 from "../assets/images/banner/5.jpg"
// import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[510px] h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="space-y-7  w-2/3 pl-12"> 
            <h2 className="text-5xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=""> 
              <button className="btn btn-warning text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 left-5 justify-end right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 focus:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle focus:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="space-y-7  w-2/3 pl-12"> 
            <h2 className="text-5xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=""> 
              <button className="btn btn-warning text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 left-5  justify-end right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5 focus:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle focus:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="space-y-7  w-2/3 pl-12"> 
            <h2 className="text-5xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=""> 
              <button className="btn btn-warning text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 left-5  justify-end right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5 focus:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle focus:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="space-y-7  w-2/3 pl-12"> 
            <h2 className="text-5xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=""> 
              <button className="btn btn-warning text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning hover:text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 left-5  justify-end right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5 focus:bg-[#FF3811]">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle focus:bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
