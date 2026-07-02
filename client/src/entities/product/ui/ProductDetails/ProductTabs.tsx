// ProductTabs.tsx
import { useState } from "react";
import type { IProduct } from "../../model";
import styles from "./ProductDetails.module.css";

export function ProductTabs({ product }: { product: IProduct }) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeaders}>
        <button
          className={activeTab === "description" ? styles.active : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "reviews" ? styles.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (5)
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "description" && <p>{product.description}</p>}
        {activeTab === "reviews" && (
          <div>Customer reviews will appear here...</div>
        )}
      </div>
    </div>
  );
}
