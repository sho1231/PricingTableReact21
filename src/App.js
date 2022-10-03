import "./App.css";
import { pricingInfo } from "./pricingInfoData";
import PricingInfoCard from "./Components/PricingInfoCard";

function App() {
  return (
    <div className="app">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {pricingInfo.map((info, id) => (
              <PricingInfoCard key={id} pricingInfo={info} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
