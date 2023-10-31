import icon from "../assets/icons/service-icon.png";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service; 
  return (
    <div className="card p-6 space-y-4 bg-[#E8E8E8] rounded-lg"> 
        <img className="h-[210px] w-full" src={img} alt="Shoes" />
      <h2 className="card-title">{title}</h2>
      <div className="flex justify-between items-center">
        <p>Price: $ {price}</p>
       <Link to={`/book/${_id}`} > <img src={icon} alt="" />  
       </Link>  
      </div>
    </div>
  );
};

export default ServiceCard;
