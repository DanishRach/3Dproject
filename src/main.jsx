import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./styles.css"; // Pastikan font didefinisikan di sini
import PreLoader from "./components/PreLoader";
import App from "./App";

function Overlay() {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    // Tampilkan teks setelah 5 detik
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Bersihkan timer ketika komponen unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <>
      <App />
      <Overlay />
    </>
  </>
);
