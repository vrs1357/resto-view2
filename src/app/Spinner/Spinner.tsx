import { FallingLines } from "react-loader-spinner";

export default function Spinner() {
    return (
        <div className="Spinner">
            <FallingLines
                color="#073763"
                width="300"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
};