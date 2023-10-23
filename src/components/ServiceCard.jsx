import icon from "../assets/icons/service-icon.png";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card p-6 space-y-4 bg-[#E8E8E8] rounded-lg"> 
        <img className="h-[210px] w-full" src={img} alt="Shoes" />
      <h2 className="card-title">{title}</h2>
      <div className="flex justify-between items-center">
        <p>Price: $ {price}</p>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
