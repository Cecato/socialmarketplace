
type Props = {
    textOption: string;
}

export default function OptionSelector({textOption}: Props){

    return(
        <button className="border p-1 rounded-md">
            <p className="text-sm">
                {textOption}
            </p>
        </button>
    )
}