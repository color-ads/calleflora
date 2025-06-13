import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.checkoutFieldWrapper, className].join(" ")}>
      <div className={styles.checkoutField}>
        <div className={styles.arrowChevronRightWrapper}>
          <Image
            className={styles.arrowChevronRight}
            loading="lazy"
            width={24.3}
            height={24}
            sizes="100vw"
            alt=""
            src="/arrow--chevron-right.svg"
          />
        </div>
        <div className={styles.checkoutLabel}>
          <h3 className={styles.checkOut}>CHECK OUT</h3>
          <div className={styles.jun2025}>10 jun 2025</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
