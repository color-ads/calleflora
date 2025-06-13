"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./landing-page.module.css";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/root");
  }, [router]);

  return (
    <div className={styles.landingPage}>
      <Image
        className={styles.menuMoreVertical}
        loading="lazy"
        width={45}
        height={45}
        sizes="100vw"
        alt=""
        src="/menu--more-vertical.svg"
      />
      <Image
        className={styles.ilustracionSinTitulo81}
        width={1280}
        height={832}
        sizes="100vw"
        alt=""
        src="/ilustracion-sin-titulo-8-1@2x.png"
      />
      <section className={styles.landingPageInner}>
        <div className={styles.enElCoraznDeColombiaExiParent}>
          <h2 className={styles.enElCoraznContainer}>
            <p className={styles.enElCoraznDeColombiaExi}>
              <span className={styles.enEl}>{`En el `}</span>
              <span className={styles.enEl}>corazón de Colombia,</span>
              <span>{` existe un rincón donde la naturaleza susurra, y la literatura `}</span>
              <span className={styles.enEl}>
                florece entre muros y jardines.
              </span>
            </p>
            <p className={styles.enElCoraznDeColombiaExi}>
              <span className={styles.enEl}>{`CALLE `}</span>
              <span className={styles.enEl}>FLORA</span>
              <span
                className={styles.enEl}
              >{` es un hotel botánico, inspirado en la `}</span>
              <span className={styles.enEl}>diversidad silvestre</span>
              <span>
                {" "}
                de nuestras tierras y en las palabras que alguna vez la
                nombraron.
              </span>
            </p>
            <p className={styles.enElCoraznDeColombiaExi}>
              <span>{`Aquí cada espacio `}</span>
              <span className={styles.enEl}>cuenta una historia:</span>
              <span> la de una hoja, una raíz, una voz.</span>
            </p>
            <p className={styles.enElCoraznDeColombiaExi}>
              <span>{`Bienvenidos a su refugio `}</span>
              <span className={styles.enEl}>
                entre lo natural y lo narrado.
              </span>
            </p>
          </h2>
          <div className={styles.calleFlora2025Wrapper}>
            <div className={styles.calleFlora2025}>— Calle Flora, 2025</div>
          </div>
        </div>
      </section>
      <footer className={styles.landingPageChild}>
        <Image
          className={styles.frameChild}
          loading="lazy"
          width={76}
          height={68}
          sizes="100vw"
          alt=""
          src="/group-2@2x.png"
          onClick={onGroupImageClick}
        />
      </footer>
    </div>
  );
};

export default LandingPage;
