import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../components/ui/button";
import { LayoutDashboard, CreditCard, BarChart2, TrendingUp, User } from "lucide-react";

export default function Navbar() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const tabs = [
        { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5 mr-2" /> },
        { id: "subscriptions", label: "Subscriptions", icon: <CreditCard className="h-5 w-5 mr-2" /> },
        { id: "reports", label: "Reports", icon: <BarChart2 className="h-5 w-5 mr-2" /> },
        { id: "monthly-trends", label: "Monthly Trends", icon: <TrendingUp className="h-5 w-5 mr-2" /> },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-[#0d1117] border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-white" />
                    <h1 className="font-bold text-white text-lg tracking-tight">
                        SubManager
                    </h1>
                </div>

                <nav className="hidden md:flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors duration-150 ${activeTab === tab.id
                                ? "bg-blue-600 text-white shadow-sm"
                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                                }`}
                        >
                            <span className="flex items-center">
                                {tab.icon}
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-gray-400">
                        <ThemeToggle />
                    </button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                        <User className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
