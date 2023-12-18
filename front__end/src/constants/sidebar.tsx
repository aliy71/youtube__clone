import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import ISidebarData from "@/interface/sidebarData";

const SidebarData: ISidebarData[] = [
    {
        label: 'home',
        path: '/',
        icon: <AiFillHome />,
        isActive: false,
    },
    {
        label: 'shorts',
        path: '/shorts',
        icon: <SiYoutubeshorts />,
        isActive: false,
    },
    {
        label: 'subscriptions',
        path: '/feed/subscriptions',
        icon: <MdSubscriptions />,
        isActive: false,
    }
]

export default SidebarData