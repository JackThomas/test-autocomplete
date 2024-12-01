import { ChangeEvent, FocusEvent } from "react";
import { Loader } from "../Loader/Loader";
import styles from "./Input.module.css";

interface InputProps {
    value: string;
    onFocus: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
}

const Input = ({ value, onFocus, onChange, isLoading }: InputProps) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onFocus={onFocus}
                onChange={onChange}
            />
            {isLoading && (
                <div className={styles.input__loader}>
                    <Loader />
                </div>
            )}
        </div>
    );
};

export { Input };
