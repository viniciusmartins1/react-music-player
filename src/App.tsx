import styles from "./App.module.css";
import imageSmaller from "./assets/img-1.png";
import imageBigger from "./assets/img-2.png";
import { Rewind, FastForward, Play } from "phosphor-react";

import "./global.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.frame_one}>
        <img src={imageBigger} alt="" />
        <div className={styles.frame_one_title}>
          <h1>Acorda Devinho</h1>
          <p>Banda Rocketseat</p>
        </div>

        <div className={styles.frame_one_play}>
          <Rewind size={28} weight="fill" />
          <Play size={28} weight="fill" />
          <FastForward size={28} weight="fill" />
        </div>

        <div>
          <div className={styles.progress_bar}>
            <div></div>
          </div>
          <div className={styles.music_minutes}>
            <span>03:20</span>
            <span>00:12</span>
          </div>
        </div>
      </div>

      <div className={styles.container_frames}>
        <div className={styles.frame_second}>
          <div className={styles.frame_title_container}>
            <img src={imageSmaller} alt="" />
            <div className={styles.frame_one_title}>
              <h1>Acorda Devinho</h1>
              <p>Banda Rocketseat</p>
            </div>
          </div>

          <div className={styles.frame_content_play}>
            <Rewind size={28} weight="fill" />
            <Play size={28} weight="fill" />
            <FastForward size={28} weight="fill" />
          </div>

          <div>
            <div className={styles.progress_bar}>
              <div></div>
            </div>
            <div className={styles.music_minutes}>
              <span>03:20</span>
              <span>00:12</span>
            </div>
          </div>
        </div>

        <div className={styles.frame_third}>
          <div className={styles.frame_title_container}>
            <img src={imageSmaller} alt="" />
            <div className={styles.frame_one_title}>
              <h1>Acorda Devinho</h1>
              <p>Banda Rocketseat</p>
            </div>
          </div>

          <div className={styles.frame_content_play}>
            <Rewind size={28} weight="fill" />
            <Play size={28} weight="fill" />
            <FastForward size={28} weight="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
