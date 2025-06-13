"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./root.module.css";

const Root: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/b-a-n-n-e-r");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/clipboards-student-view");
  }, [router]);

  return (
    <div className={styles.root}>
      <section className={styles.rootChild} />
      <div className={styles.rootItem} />
      <main className={styles.rootInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <section className={styles.frameSection}>
              <div className={styles.orquiDeaParent}>
                <h1 className={styles.orquiDea}>
                  <p className={styles.orqui}>
                    <span className={styles.orqu}>ORQU</span>
                    <span>I</span>
                  </p>
                  <p className={styles.orqui}>DEA</p>
                </h1>
                <div className={styles.enEstaHabitacinElContainer}>
                  <p className={styles.orqui}>
                    <span className={styles.orqu}>{`“En esta `}</span>
                    <span>habitación</span>
                  </p>
                  <p className={styles.orqui}>el tiempo se posa suave,</p>
                  <p className={styles.orqui}>
                    <span>{`como `}</span>
                    <span className={styles.orqu}>orquídea en rama,</span>
                  </p>
                  <p className={styles.orqui}>como voz que no se apura”.</p>
                </div>
              </div>
            </section>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div
                    className={styles.inicioWrapper}
                    onClick={onFrameContainerClick}
                  >
                    <h3 className={styles.inicio}>Inicio</h3>
                  </div>
                  <div className={styles.habitacionesWrapper}>
                    <h3 className={styles.inicio}>Habitaciones</h3>
                  </div>
                  <div
                    className={styles.inicioWrapper}
                    onClick={onFrameContainerClick1}
                  >
                    <h3 className={styles.inicio}>Experiencias</h3>
                  </div>
                  <div className={styles.habitacionesWrapper}>
                    <h3 className={styles.inicio}>Restaurantes</h3>
                  </div>
                  <div className={styles.habitacionesWrapper}>
                    <h3 className={styles.inicio}>Contácto</h3>
                  </div>
                  <div className={styles.habitacionesWrapper}>
                    <h3 className={styles.inicio}>About Us</h3>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <Image
                    className={styles.frameIcon}
                    loading="lazy"
                    width={63}
                    height={63}
                    sizes="100vw"
                    alt=""
                    src="/frame-1.svg"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <Image
                  className={styles.frameChild1}
                  loading="lazy"
                  width={15}
                  height={1}
                  sizes="100vw"
                  alt=""
                  src="/frame-12.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
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
          <h1 className={styles.calleFlora}>
            <span>{`CALLE `}</span>
            <span>FLORA</span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Root;
