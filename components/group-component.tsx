import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "./frame-component";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.menuParent, className].join(" ")}>
      <div className={styles.menu}>
        <Image
          className={styles.menuMoreVertical}
          width={45}
          height={45}
          sizes="100vw"
          alt=""
          src="/menu--more-vertical.svg"
        />
      </div>
      <div className={styles.background} />
      <Image
        className={styles.menuMoreVertical1}
        loading="lazy"
        width={45.5}
        height={45}
        sizes="100vw"
        alt=""
        src="/menu--more-vertical-1.svg"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.checkInParent}>
          <h3 className={styles.checkIn}>CHECK IN</h3>
          <div className={styles.jun2025}>10 jun 2025</div>
        </div>
      </div>
      <FrameComponent />
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.huespedesParent}>
          <h3 className={styles.huespedes}>HUESPEDES</h3>
          <div className={styles.jun2025}>10 jun 2025</div>
        </div>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.cdigoPromoWrapper}>
        <h3 className={styles.cdigoPromo}>CÓDIGO PROMO</h3>
      </div>
      <div className={styles.reserveButtonWrapper}>
        <button className={styles.reserveButton}>
          <div className={styles.reservar}>
            <span className={styles.reser}>RESER</span>
            <span className={styles.reser}>VAR</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default GroupComponent;
