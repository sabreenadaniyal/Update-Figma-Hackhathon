import Hero from "./Components/Hero";
import NewArrivals from "./Components/NewArrivals";
import TopSelling from "./Components/TopSelling";
import DressStyle from "./Components/DressStyle";
import HappyCustomer from "./Components/HappyCustomer";
// import TShirt from "./TShirt/page";
// import Casual from "./Casual/page";
// import Cart from "./Cart/page";



export default function Home() {
  return (
    <div>
 
       <Hero />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomer /> 
      {/* <TShirt />
      <Casual />
      <Cart />  */}

    </div >
  );
}
