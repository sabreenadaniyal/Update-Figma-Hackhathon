import Hero from "./Components/Hero";
import NewArrivals from "./Components/NewArrivals";
import TopSelling from "./Components/TopSelling";
import DressStyle from "./Components/DressStyle";
import HappyCustomer from "./Components/HappyCustomer";


export default  function Home() {
  return (
  <div className="mb-[100px]">

      <Hero /> 
      <NewArrivals /> 
      <TopSelling />
      <DressStyle />
      <HappyCustomer />

    </div >
  );
}
