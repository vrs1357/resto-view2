import { FallingLines } from "react-loader-spinner";

export default function Spinner() {
    return (
        <div className="Spinner">
            <FallingLines
                color="#073763"
                width="300"
                visible={true}
                aria-label="falling-circles-loading"
            />
        </div>
    );
};