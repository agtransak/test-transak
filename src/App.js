import { useEffect } from "react";
import { Transak } from "@transak/transak-sdk";
import "./styles.css";

function App() {
  const transakConfig = {
    apiKey: "YOUR_API_KEY",
    environment: Transak.ENVIRONMENTS.STAGING,
    containerId: "transak-container"
  };

  useEffect(() => {
    const transak = new Transak(transakConfig);
    transak.init();

    return () => {
      transak.cleanup();
    };
  }, []);

  return (
      <div className="App">
        <div id="transak-container"></div>
      </div>
  );
}

export default App;
