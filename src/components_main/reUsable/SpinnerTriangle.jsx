import { Triangle } from "react-loader-spinner";

function SpinnerTriangle() {
    return (
        <div className="flex items-center justify-center">
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#1632e7"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default SpinnerTriangle;
