import Shoe1 from "../../../assets/shoes/shoe.jpg";
import Shoe2 from "../../../assets/shoes/Black.webp";
import Shoe3 from "../../../assets/shoes/converse-chuck-taylor-all-star-move kids.jpg";
import Shoe4 from "../../../assets/shoes/customize.jpg";
import Shoe5 from "../../../assets/shoes/easy-on.webp";
import Shoe6 from "../../../assets/shoes/men boot (2).jpg";
import Shoe7 from "../../../assets/shoes/valentine.webp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export type Shoe = {
  name: string;
  image: string;
};

const shoes: Shoe[] = [
  { name: "Boots", image: Shoe6 },
  { name: "High Top", image: Shoe2 },
  { name: "Launch", image: Shoe7 },
  { name: "Custom", image: Shoe4 },
  { name: "Low", image: Shoe1 },
  { name: "Easy-on", image: Shoe5 },
  { name: "Chunk", image: Shoe3 },
];

// const options = {
//   loop: true,
//   margin: 10,
//   responsive: {
//     0: { items: 1 },
//     600: { items: 3 },
//     1000: { items: 5 },
//   },
// };

const ShopByStyle = () => {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true, 
    autoplayTimeout: 3000,
    nav: false, 
    dots: false,
  };

  return (
    <div className="mt-10 h-[500px] w-full overflow-x-auto overflow-y-hidden">
      <OwlCarousel className="owl-theme" {...options}>
        {shoes.map((item: Shoe, index) => (
          <div
            className="relative mx-5 inline-block h-[450px] w-[450px] item"
            key={`${item.name}-${index}`}
          >
            <p className="mb-12">{item.name}</p>
            <img
              src={item.image}
              alt={item.name}
              className="h-[400px] w-full"
            />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ShopByStyle;

