import { useAutocomplete } from "../../hooks/useAutocomplete";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Input } from "../Input/Input";
import { Results } from "../Results/Results";
import styles from "./Autocomplete.module.css";

const Autocomplete = () => {
    const {
        container,
        isLoading,
        string,
        results,
        inputProps,
        dropdownProps,
        itemProps,
    } = useAutocomplete();

    return (
        <ErrorBoundary>
            <div className={styles.autocomplete} ref={container}>
                <Input {...inputProps} isLoading={isLoading} />
                <Results
                    {...dropdownProps}
                    isLoading={isLoading}
                    results={results}
                    string={string}
                    itemProps={itemProps}
                />
            </div>
        </ErrorBoundary>
    );
};

export { Autocomplete };
