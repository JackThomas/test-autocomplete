import { Item } from "../../types/Item.type";
import { BoldText } from "../BoldText/BoldText";
import styles from "./ResultsItem.module.css";

interface ResultsItemProps {
    item: Item;
    string: string;
    onClick: (item: string) => void;
}

const ResultsItem = ({ item, string, onClick }: ResultsItemProps) => {
    return (
        <div className={styles.resultsItem}>
            <button
                className={styles.resultsItem__button}
                onClick={() => onClick(item.name)}
            >
                <BoldText key={item.id} string={item.name} bold={string} />
            </button>
        </div>
    );
};

export { ResultsItem };
