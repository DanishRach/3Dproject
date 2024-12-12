import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./styles.css"; // Pastikan font didefinisikan di sini
import PreLoader from "./components/PreLoader";
import App from "./App";

function Navbar() {
  return (
    <nav
      style={{
        marginLeft: 10,
        marginTop: 20,
        padding: "1rem",
        color: "#fff",
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://about-page-tawny.vercel.app/"
            target=""
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            About
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://3d-project-page.vercel.app/"
            target=""
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            My Project 
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://game-3d-danish.vercel.app/"
            target=""
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Game 
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://github.com/DanishRach"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Github
          </a>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <a
            href="https://www.linkedin.com/in/danish-rachman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}

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
    // Tampilkan teks setelah 3 detik
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
      {!isLoading}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <Overlay />
    <Navbar />
    <App />
  </>
);
