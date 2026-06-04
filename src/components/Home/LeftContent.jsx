// app/components/Sidebar.js
"use client";

import { FaUserSecret } from "react-icons/fa6";
import {
    FaHome,
    FaShoppingCart,
    FaTag,
    FaUserCircle,
    FaUserPlus,
} from "react-icons/fa";
import {
    FiBarChart2,
    FiHelpCircle,
    FiLayers,
    FiMessageSquare,
} from "react-icons/fi";
import { RiListOrdered } from "react-icons/ri";

const menuItems = [
    { icon: <FaHome className="text-lg" />, label: "Home" },
    { icon: <FiMessageSquare className="text-lg" />, label: "Questions" },
    { icon: <FiBarChart2 className="text-lg" />, label: "Polls" },
    { icon: <FaUserSecret className="text-lg" />, label: "Users" },
    { icon: <RiListOrdered className="text-lg" />, label: "Categories" },
    { icon: <FaUserPlus className="text-lg" />, label: "Membership" },
    { icon: <FaUserCircle className="text-lg" />, label: "Groups" },
    { icon: <FiLayers className="text-lg" />, label: "Badges" },
    { icon: <FaTag className="text-lg" />, label: "Tags" },
    { icon: <FiHelpCircle className="text-lg" />, label: "FAQs" },
    { icon: <FaShoppingCart className="text-lg" />, label: "Cart" },
];

const LeftContent = () => {
    return (
        <aside className="max-w-[250px]">
            <nav className="space-y-2">
                {menuItems.map(({ icon, label }, idx) => (
                    <button
                        key={idx}
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium"
                    >
                        {icon}
                        <span>{label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default LeftContent;
