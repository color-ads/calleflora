import type { NextPage } from "next";
import FrameComponent1 from "../../components/frame-component1";
import FrameComponent2 from "../../components/frame-component2";
import FrameComponent3 from "../../components/frame-component3";
import styles from "./b-a-n-n-e-r.module.css";

const BANNER: NextPage = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerChild} />
      <main className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <FrameComponent1 />
          <FrameComponent2 />
        </section>
        <div className={styles.diarioDeLecumberriLvaroMWrapper}>
          <div className={styles.diarioDeLecumberri}>
            — Diario de Lecumberri, Álvaro Mutis
          </div>
        </div>
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default BANNER;
