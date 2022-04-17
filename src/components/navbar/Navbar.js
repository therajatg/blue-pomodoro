import { BsMoonFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={`navigation-container ${styles.navigationContainer}`}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <FaBookOpen className="iconSizeLarge" />
        <span className="font-size-m weightedText">
          Blue <span className={styles.logoColor}>Pomodoro</span>
        </span>
      </div>

      <div className={`${styles.navOptions}`}>
        <div className="icon-button">
          <BsMoonFill className="iconSizeSmall" />
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
