import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <header className={styles.menuMoreVerticalParent}>
          <Image
            className={styles.menuMoreVertical}
            loading="lazy"
            width={45}
            height={45}
            sizes="100vw"
            alt=""
            src="/menu--more-vertical.svg"
          />
          <div className={styles.calleFloraWrapper}>
            <h2 className={styles.calleFlora}>
              <span>{`CALLE `}</span>
              <span>FLORA</span>
            </h2>
          </div>
        </header>
        <div className={styles.calleFloraContainer}>
          <h1 className={styles.calleFlora1}>
            <span>{`CALLE `}</span>
            <span>FLORA</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
