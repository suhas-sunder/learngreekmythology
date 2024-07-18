import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./styles/NavBar.module.css";
import Icon from "~/components/utils/other/Icon";
import Logo from "~/components/navigation/Logo";

interface PropType {
  showMobileMenu?: boolean;
  isLoggedIn?: boolean;
  setShowMobileMenu: (value: boolean) => void;
}

// Main navigation links for nav bar
function MainLinks({ showMobileMenu, setShowMobileMenu }: PropType) {
  return (
    <ul
      id={showMobileMenu ? "mobile-links" : "main-links"}
      className={`bg-defaultblue  ${
        showMobileMenu ? styles["mobile-nav"] : styles["main-nav"]
      }`}
    >
      <li>
        {showMobileMenu && (
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className={`relative flex items-center justify-center gap-2 py-5 tracking-[0.1em]`}
          >
            Typing Test
            <Icon
              icon="speed"
              title="typing-test-icon"
              customStyle={`${styles.icon} text-white -translate-y-[0.07em] relative`}
            />
          </NavLink>
        )}
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/courses"
          className="relative flex items-center justify-center gap-2 py-5 tracking-[0.1em]"
        >
          Courses
          <Icon
            icon="graduationHat"
            title="lessons-icon"
            customStyle={`${styles.icon} text-white -translate-y-[0.07em] relative`}
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/projects"
          className="relative flex items-center justify-center gap-2 py-5 tracking-[0.1em]"
        >
          Projects
          <Icon
            icon="gamepad"
            title="games-icon"
            customStyle={` ${styles.icon} text-white -translate-y-[0.07em] relative`}
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/about"
          className="relative flex items-center justify-center gap-2 py-5 tracking-[0.1em]"
        >
          About
          <Icon
            icon="questionMark"
            title="faq-icon"
            customStyle={` ${styles.icon} text-white -translate-y-[0.07em] relative`}
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setShowMobileMenu(false)}
          to="/resources"
          className="relative flex items-center justify-center gap-2 py-5 tracking-[0.1em]"
        >
          Resources
          <Icon
            icon="questionMark"
            title="faq-icon"
            customStyle={` ${styles.icon} text-white -translate-y-[0.07em] relative`}
          />
        </NavLink>
      </li>
    </ul>
  );
}

//Used by App.tsx component
export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  // Close burger menu whenever screen is resized
  useEffect(() => {
    const handleResize = () => {
      setShowMobileMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handles mobile nav bar menu order. Useful when modal is open and nav-bar needs to remain at the very top.
  useEffect(() => {
    const navElement = document.getElementById("nav");

    if (showMobileMenu && navElement) {
      navElement.style.zIndex = "1000";
    } else if (navElement) {
      navElement.style.zIndex = "0";
    }
  }, [showMobileMenu]);

  return (
    <nav className={`${styles.nav}`}>
      <div
        className={`${styles["fade-in-nav"]} m-auto flex  max-w-[1025px] items-center justify-between`}
      >
        <Logo setShowMobileMenu={setShowMobileMenu} />
        <MainLinks
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
        {showMobileMenu && (
          <div
            onClick={() => setShowMobileMenu(false)}
            className="absolute bottom-0 left-0 right-0 top-24 min-h-[100vh] min-w-[100vw] bg-sky-950 bg-opacity-30"
          />
        )}

        <input
          id="burger"
          type="checkbox"
          checked={showMobileMenu ? true : false}
          readOnly
          className="relative hidden"
        />
        <label
          data-testid="burger-icons"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          htmlFor="burger"
          className={`${styles["burger-label"]} relative hover:cursor-pointer`}
        >
          <Icon
            title="burger-closed-icon"
            customStyle={`flex relative justify-center items-center w-[3.324em] h-[3.324em] scale-125 mr-2 ${styles["burger-open"]}`}
            icon="burgerOpen"
          />
          <Icon
            title="burger-open-icon"
            customStyle={`hidden relative justify-center items-center w-[3.324em] h-[3.324em] scale-125 mr-2 ${styles["burger-close"]}`}
            icon="burgerClosed"
          />
        </label>
      </div>
    </nav>
  );
}
