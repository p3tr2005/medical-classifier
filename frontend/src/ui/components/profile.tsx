import { HTMLAttributes } from "react";

type Props = {
    placeholder: string;
} & HTMLAttributes<HTMLDivElement>

function Profile({ placeholder, ...rest }: Props) {
    return (
        <div {...rest} className="w-10 h-10 flex items-center justify-center p-2 bg-btn-primary text-white rounded-full">
            {placeholder}
        </div>
    )
}

export default Profile
