import Shoe1 from "../../../assets/shoes/shoe.jpg";
import Shoe2 from "../../../assets/shoes/Black.webp";
import Shoe3 from "../../../assets/shoes/converse-chuck-taylor-all-star-move kids.jpg";
import Shoe4 from "../../../assets/shoes/customize.jpg";
import Shoe5 from "../../../assets/shoes/easy-on.webp";
import Shoe6 from "../../../assets/shoes/men boot (2).jpg";
import Shoe7 from "../../../assets/shoes/valentine.webp";
// import OwlCarousel from "react-owl-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export type Shoe = {
  name: string;
  image: string;
  url: string;
};

const shoes: Shoe[] = [
  { name: "Boots", image: Shoe6, url: "/boots" },
  { name: "High Top", image: Shoe2, url: "/hightop" },
  { name: "Launch", image: Shoe7, url: "/launch" },
  { name: "Custom", image: Shoe4, url: "/custom" },
  { name: "Platform", image: Shoe1, url: "/platform" },
  { name: "Easy-on", image: Shoe5, url: "/easyon" },
  { name: "Chunk", image: Shoe3, url: "/chunk" },
];

const ShopByStyle = () => {
  // const options = {
  //   loop: true,
  //   margin: 10,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   nav: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     576: {
  //       items: 3,
  //     },
  //   },
  // };

  const settings = {
    infinite: true,        
    speed: 500,            
    slidesToShow: 3,      
    slidesToScroll: 1,    
    dots: true,
    // centerMode: true,     
    // centerPadding: '20px', 
    autoPlay: true,
    autoPlaySpeed: 2000,
    focusOnSelect: true,   
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,  
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,  
        },
      },
    ],
  };

  return (
    <>
      <div className="text-3xl font-bold ml-4 font-serif">Shop By Style</div>
      <div className=" slider-container m-0 w-full max-h-[500px] gap-4">
        <Slider {...settings}>
          {shoes.map((item: Shoe, index) => (
            <div
              className="w-[400px] inline-block aspect-[1/1] "
              key={`${item.name}-${index}`}
            >
              <p className="my-6 font-serif text-2xl">{item.name}</p>
              <Link to={item.url}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="flex m-auto w-full h-[350px] max-h-[400px] object-cover rounded"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ShopByStyle;

// function PauseOnHover() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default PauseOnHover;
