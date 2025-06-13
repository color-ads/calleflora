"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FrameComponent from "./frame-component";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <Image
        className={styles.frameChild}
        loading="lazy"
        width={63}
        height={63}
        sizes="100vw"
        alt=""
        src="/group-6.svg"
        onClick={onGroupClick}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.dropdownMenu}>
          <Image
            className={styles.menuMoreVertical}
            loading="lazy"
            width={45.5}
            height={45}
            sizes="100vw"
            alt=""
            src="/menu--more-vertical-1.svg"
          />
        </div>
        <div className={styles.inputFields}>
          <div className={styles.inputLabels}>
            <h3 className={styles.checkIn}>CHECK IN</h3>
            <div className={styles.jun2025}>10 jun 2025</div>
          </div>
        </div>
        <FrameComponent />
        <div className={styles.inputFields1}>
          <div className={styles.inputFieldsChild} />
        </div>
        <div className={styles.inputFields2}>
          <div className={styles.huespedesParent}>
            <h3 className={styles.huespedes}>HUESPEDES</h3>
            <div className={styles.jun2025}>10 jun 2025</div>
          </div>
        </div>
        <div className={styles.inputFields3}>
          <div className={styles.inputFieldsChild} />
        </div>
        <div className={styles.cdigoPromoWrapper}>
          <h3 className={styles.cdigoPromo}>CÓDIGO PROMO</h3>
        </div>
        <div className={styles.buttonContentWrapper}>
          <button className={styles.buttonContent}>
            <div className={styles.reservar}>
              <span className={styles.reser}>RESER</span>
              <span className={styles.reser}>VAR</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
