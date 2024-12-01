import { Fragment } from "react/jsx-runtime";

interface BoldTextProps {
    string: string;
    bold: string;
}

const BoldText = ({ string, bold }: BoldTextProps) => {
    const stringArray = string.split(RegExp(bold, "ig"));
    const match = string.match(RegExp(bold, "ig"));

    return (
        <span>
            {stringArray.map((item, index) => (
                <Fragment key={item}>
                    {item}
                    {index !== stringArray.length - 1 && match && (
                        <b>{match[index]}</b>
                    )}
                </Fragment>
            ))}
        </span>
    );
};

export { BoldText };
