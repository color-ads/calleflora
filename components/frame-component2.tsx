"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/clipboards-student-view");
  }, [router]);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <Image
          className={styles.frameChild}
          loading="lazy"
          width={35}
          height={16}
          sizes="100vw"
          alt=""
          src="/frame-121.svg"
        />
      </div>
      <div className={styles.lasPlantasEranMiPrimerAmoWrapper}>
        <div className={styles.lasPlantasEranContainer}>
          <p className={styles.lasPlantasEranMiPrimerAmo}>
            <span className={styles.las}>{`“Las `}</span>
            <span className={styles.las}>plantas</span>
            <span className={styles.las}>{` eran mi `}</span>
            <span>primer amor.</span>
          </p>
          <p className={styles.lasPlantasEranMiPrimerAmo}>
            <span>{` En su silencio `}</span>
            <span className={styles.las}>entendí todo.”</span>
          </p>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.inicioWrapper}>
          <h3 className={styles.inicio}>Inicio</h3>
        </div>
        <div
          className={styles.habitacionesWrapper}
          onClick={onFrameContainerClick}
        >
          <h3 className={styles.inicio}>Habitaciones</h3>
        </div>
        <div
          className={styles.experienciasWrapper}
          onClick={onFrameContainerClick1}
        >
          <h3 className={styles.inicio}>Experiencias</h3>
        </div>
        <div className={styles.restaurantesWrapper}>
          <h3 className={styles.inicio}>Restaurantes</h3>
        </div>
        <div className={styles.contctoWrapper}>
          <h3 className={styles.inicio}>Contácto</h3>
        </div>
        <div className={styles.aboutUsWrapper}>
          <h3 className={styles.inicio}>About Us</h3>
        </div>
        <Image
          className={styles.frameItem}
          loading="lazy"
          width={35}
          height={16}
          sizes="100vw"
          alt=""
          src="/frame-121.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
