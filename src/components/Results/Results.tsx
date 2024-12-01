import { Item } from "../../types/Item.type";
import { ResultsItem } from "../ResultsItem/ResultsItem";
import styles from "./Results.module.css";

interface ResultsProps {
    isOpen: boolean;
    isLoading: boolean;
    results: Item[];

    string: string;
    itemProps: {
        onClick: (value: string) => void;
    };
}

const Results = ({
    isOpen,
    isLoading,
    results,
    string,
    itemProps,
}: ResultsProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.results}>
            <div className={styles.results__content}>
                {!isLoading &&
                    results.map((item) => (
                        <ResultsItem
                            key={item.id}
                            item={item}
                            string={string}
                            {...itemProps}
                        />
                    ))}

                {!isLoading && results.length === 0 && (
                    <div>No results found</div>
                )}
            </div>
        </div>
    );
};

export { Results };
