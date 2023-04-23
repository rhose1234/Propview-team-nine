import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ViewPurchaseButtons from "./components/Section1/ViewPurchaseButtons";
import PropertyName from "./components/Properties/PropertyName";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Footer from "./components/Footer/Footer";

function Property() {
  return (
    <div>
      <Navigation />
      <ViewPurchaseButtons />
      <PropertyName />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default Property;
