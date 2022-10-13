import Link from "next/link";
import styles from "./menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faFolderOpen,
  faBriefcase,
  faRss,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu({ page }: any) {
  return (
    <div className={styles.menu}>
          <ul>
            <li className={`${page === 'home' ? styles.active : ''}`}>
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faHouseUser} />
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li className={`${page === 'about' ? styles.active : ''}`}>
              <Link href="/about">
                <a>
                  <FontAwesomeIcon icon={faUser} />
                  <span>About Me</span>
                </a>
              </Link>
            </li>
            <li className={`${page === 'resume' ? styles.active : ''}`}>
              <Link href="/resume">
                <a>
                  <FontAwesomeIcon icon={faFolderOpen} />
                  <span>Resume</span>
                </a>
              </Link>
            </li>

            <li className={`${page === 'work' ? styles.active : ''}`}>
              <Link href="/work">
                <a>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span>Work</span>
                </a>
              </Link>
            </li>

            <li className={`${page === 'blog' ? styles.active : ''}`}>
              <Link href="/blog">
                <a>
                  <FontAwesomeIcon icon={faRss} />
                  <span>Blog</span>
                </a>
              </Link>
            </li>

            <li className={`${page === 'contact' ? styles.active : ''}`}>
              <Link href="/contact">
                <a>
                  <FontAwesomeIcon icon={faComment} />
                  <span>Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
  );
}
