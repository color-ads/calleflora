import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "../../components/group-component";
import InnerHeader from "../../components/inner-header";
import styles from "./clipboards-student-view.module.css";

const ClipboardsStudentView: NextPage = () => {
  return (
    <div className={styles.clipboardsStudentView}>
      <div className={styles.image7} />
      <div className={styles.diseoSinTtulo401} />
      <GroupComponent />
      <Image
        className={styles.ilustracionSinTitulo16}
        width={534}
        height={950}
        sizes="100vw"
        alt=""
        src="/ilustracion-sin-titulo-16-1@2x.png"
      />
      <h2 className={styles.fTPContainer}>
        <span>{`F `}</span>
        <span className={styles.t}>T P</span>
      </h2>
      <section className={styles.innerHeaderParent}>
        <InnerHeader />
        <h2 className={styles.calleFlora}>
          <span>{`CALLE `}</span>
          <span>FLORA</span>
        </h2>
      </section>
    </div>
  );
};

export default ClipboardsStudentView;
