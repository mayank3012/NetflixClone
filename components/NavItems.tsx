import Link from "next/link";

interface NavItemsProps {
    item: {
        label: string,
        url: string
    }
}

const NavItems = (props: NavItemsProps) => {
    const { label, url } = props.item;
    return (
        <div className="hover:text-gray-400 transition capitalize">
            <Link href={url}>{label}</Link>
        </div>
    )
}

export default NavItems