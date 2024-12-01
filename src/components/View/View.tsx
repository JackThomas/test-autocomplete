import { ReactNode } from "react";
import styles from "./View.module.css";

interface ViewProps {
    children: ReactNode;
}

const View = ({ children }: ViewProps): JSX.Element => (
    <div className={styles.view}> {children} </div>
);
export { View };
