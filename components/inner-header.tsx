"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./inner-header.module.css";

export type InnerHeaderType = {
  className?: string;
};

const InnerHeader: NextPage<InnerHeaderType> = ({ className = "" }) => {
  const router = useRouter();

  const onNavigationLinksContainerClick = useCallback(() => {
    router.push("/b-a-n-n-e-r");
  }, [router]);

  const onNavigationLinksContainerClick1 = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={[styles.innerHeader, className].join(" ")}>
      <div className={styles.roofTopParent}>
        <h1 className={styles.roofTop}>
          <span>{`ROOF `}</span>
          <span>TOP</span>
        </h1>
        <div className={styles.navigationLinksParent}>
          <div
            className={styles.navigationLinks}
            onClick={onNavigationLinksContainerClick}
          >
            <h3 className={styles.inicio}>Inicio</h3>
          </div>
          <div
            className={styles.navigationLinks}
            onClick={onNavigationLinksContainerClick1}
          >
            <h3 className={styles.inicio}>Habitaciones</h3>
          </div>
          <div className={styles.navigationLinks2}>
            <h3 className={styles.inicio}>Experiencias</h3>
          </div>
          <div className={styles.navigationLinks2}>
            <h3 className={styles.inicio}>Restaurantes</h3>
          </div>
          <div className={styles.navigationLinks2}>
            <h3 className={styles.inicio}>Contácto</h3>
          </div>
          <div className={styles.navigationLinks2}>
            <h3 className={styles.inicio}>About Us</h3>
          </div>
        </div>
        <Image
          className={styles.headerDividerIcon}
          loading="lazy"
          width={35}
          height={16}
          sizes="100vw"
          alt=""
          src="/frame-121.svg"
        />
      </div>
    </div>
  );
};

export default InnerHeader;
