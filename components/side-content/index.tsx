import Image from "next/image";
import styles from "./sideContent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import profilePhoto from "../../public/profile-photo.jpeg";

export default function SideContent({ children }: any) {
  return (
    <div className={styles.sideContent}>
      <div className={styles.avatar}>
        <Image src={profilePhoto} alt="Avatar" width={180} height={180}></Image>
      </div>

      <div className={styles.profile}>
        <h2>Nabil Musa</h2>
        <p>Web Developer</p>
      </div>

      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/nabilmusa/" title="LinkedIn" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/nerbeel" title="Twitter" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://www.facebook.com/nblmusa" title="Facebook" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://github.com/nblmusa" title="Github" target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
    </div>
  );
}
