import styles from "./Loader.module.css";

interface LoaderProps {
    size?: number;
}

const Loader = ({ size }: LoaderProps) => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__spinner}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size ?? 24}
                    height={size ?? 24}
                    stroke="#000"
                    viewBox={"0 0 24 24"}
                >
                    <g className="">
                        <circle
                            cx="12"
                            cy="12"
                            r="9.5"
                            fill="none"
                            strokeWidth="3"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export { Loader };
