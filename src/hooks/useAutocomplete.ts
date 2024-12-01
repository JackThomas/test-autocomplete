import {
    ChangeEvent,
    FocusEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { fetchPokemon, mapPokemon } from "../helpers/api";
import { useDebounce } from "../hooks/useDebounce";
import { Item } from "../types/Item.type";

const useAutocomplete = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [string, setString] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<Item[]>([]);

    const stringRef = useRef<string>(string);
    const debouncedString = useDebounce(string, 300);

    const isDropdownOpen = useMemo(
        () => isOpen && results.length > 0,
        [isOpen, results]
    );

    const handleInputOnFocus = (event: FocusEvent<HTMLInputElement>) => {
        console.log("focus", { event });
        setIsOpen(true);
    };

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setString(value);
        setIsLoading(true);
    };

    const handleItemOnClick = (value: string) => {
        setString(value);
        setResults([]);
        stringRef.current = value;
        console.log("select item");
    };

    const handleDocumentOnClick = (event: MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleDocumentOnClick);

        return () => {
            document.body.removeEventListener("click", handleDocumentOnClick);
        };
    }, []);

    useEffect(() => {
        if (!debouncedString || debouncedString === stringRef.current) {
            setIsLoading(false);
            return;
        }

        fetchPokemon(debouncedString).then((response) => {
            if (response.error) {
                throw new Error(response.error);
            } else {
                const nextResults = mapPokemon(response);
                setResults(nextResults);
            }

            setIsLoading(false);
        });
    }, [debouncedString]);

    useEffect(() => {
        if (string.length === 0) {
            setResults([]);
        }
    }, [string]);

    return {
        container: containerRef,
        isLoading,
        string: debouncedString,
        results,
        inputProps: {
            value: string,
            onFocus: handleInputOnFocus,
            onChange: handleInputOnChange,
        },
        dropdownProps: {
            isOpen: isDropdownOpen,
        },
        itemProps: {
            onClick: handleItemOnClick,
        },
    };
};

export { useAutocomplete };
