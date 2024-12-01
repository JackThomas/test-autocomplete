import { ReactNode, useEffect, useState } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handler = (event: ErrorEvent) => {
            console.error(
                "Error caught by Error Boundary:",
                event.error,
                event
            );
            setHasError(true);
        };

        window.addEventListener("error", handler);

        return () => {
            window.removeEventListener("error", handler);
        };
    }, []);

    if (hasError) {
        return <p>Something went wrong/error message here</p>;
    }

    return children;
};

export { ErrorBoundary };
