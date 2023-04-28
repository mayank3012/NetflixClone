interface SpinnerProps {
    size: number
}
const Spinner = (props: SpinnerProps) => {
    const { size } = props;
    return (
        <div
            className={`inline-block h-[${size}rem] w-[${size}rem] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mx-2`}
            role="status">
        </div>
    )
}

export default Spinner