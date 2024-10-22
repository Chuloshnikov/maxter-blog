import SquareLoader from "react-spinners/SquareLoader";

interface CSSProperties {
    display: string;
    margin: string;
    borderColor: string;
}

const override: CSSProperties = {
    display: "block",
    margin: "4px 1.5px",
    borderColor: "red",
  };

const ButtonLoading = ({margin, loading }: {margin?: string, loading?: boolean}) => {
  return (
    <div className={`flex gap-1 ${margin} items-center justify-center`}>
        <SquareLoader
        color={'#000000'}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        <SquareLoader
        color={'#000000'}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        <SquareLoader
        color={'#000000'}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        <SquareLoader
        color={'#000000'}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
  )
}

export default ButtonLoading