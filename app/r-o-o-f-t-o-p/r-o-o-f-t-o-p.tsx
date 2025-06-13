import type { NextPage } from "next";
import Image from "next/image";
import styles from "./r-o-o-f-t-o-p.module.css";

const ROOFTOP: NextPage = () => {
  return (
    <div className={styles.rooftop}>
      <Image
        className={styles.rooftopChild}
        width={1280}
        height={832}
        sizes="100vw"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <section className={styles.rooftopItem} />
      <Image
        className={styles.menuMoreVertical}
        loading="lazy"
        width={45}
        height={45}
        sizes="100vw"
        alt=""
        src="/menu--more-vertical.svg"
      />
      <main className={styles.rooftopInner}>
        <div className={styles.roofTopParent}>
          <h1 className={styles.roofTop}>
            <p className={styles.roof}>{`ROOF `}</p>
            <p className={styles.roof}>TOP</p>
          </h1>
          <div className={styles.laCiudadSusurraContainer}>
            <p className={styles.roof}>
              <span className={styles.laCiudad}>La ciudad</span>
              <span className={styles.laCiudad}> susurra abajo,</span>
              <span>{` pero arriba, solo importa el instante en que el `}</span>
              <span className={styles.laCiudad}>sol se inclina</span>
              <span className={styles.laCiudad}> sobre las hojas.</span>
            </p>
            <p className={styles.roof}>
              <span className={styles.laCiudad}>{`Bienvenido `}</span>
              <span className={styles.laCiudad}>al lugar donde</span>
              <span> florecen</span>
            </p>
            <p className={styles.roof}>los cielos.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ROOFTOP;
