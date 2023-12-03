import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users?page=1",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image className="rounded-full object-cover" src='/noavatar.png' alt='' width={50} height={50}/>
        <div className="flex flex-col">
          <span className="font-medium">Volodymyr</span>
          <span className="text-xs text-soft">Administrator</span>
        </div>
      </div>
      <ul>
        {
          menuItems.map((item) => (
            <li key={item.title}>
              <span className="text-soft text-[13px] inline-block my-[10px]">{item.title}</span>
              {item.list.map((el) => (
                <MenuLink key={el.title} el={el}/>
              ))}
            </li>
          ))
        }
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="flex items-center p-5 gap-[10px] hover:bg-[#2e374a] my-[5px] rounded-[10px] w-full">
          <MdLogout/>
          Logout
        </button>
      </form>
      
    </div>
  )
}

export default Sidebar