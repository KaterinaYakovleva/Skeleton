import styles from "./Home.module.css";
// import Products from "../../widgets/Products/Products";
import Inspiration from "../../widgets/Inspiration/Inspiration";
import Advertisment from "../../widgets/Advertisment/Advertisment";
import Range from "../../widgets/Range/Range";

export default function Home() {
  return (
    <div className={styles.container__home}>
      <Advertisment />
      <Range />
      {/* <Products /> */}
      <Inspiration />
    </div>
  );
}
