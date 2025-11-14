import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../components/ui/button";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Determine active tab from current path
    const getActiveTab = () => {
        if (location.pathname === '/dashboard') return 'dashboard';
        if (location.pathname === '/subscriptions') return 'subscriptions';
        if (location.pathname === '/reports') return 'reports';
        if (location.pathname === '/monthly-trends') return 'monthly-trends';
        return 'dashboard';
    };

    const [activeTab, setActiveTab] = useState(getActiveTab());

    const tabs = [
        { 
            id: "dashboard", 
            label: "Dashboard", 
            path: "/dashboard",
            icon: (
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        { 
            id: "subscriptions", 
            label: "Subscriptions", 
            path: "/subscriptions",
            icon: (
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            )
        },
        { 
            id: "reports", 
            label: "Reports", 
            path: "/reports",
            icon: (
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        { 
            id: "monthly-trends", 
            label: "Monthly Trends", 
            path: "/monthly-trends",
            icon: (
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab.id);
        navigate(tab.path);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[#0d1117] border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <h1 className="font-bold text-white text-lg tracking-tight">
                        SubManager
                    </h1>
                </div>

                <nav className="hidden md:flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab)}
                            className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors duration-150 ${getActiveTab() === tab.id
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
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </Button>
                </div>
            </div>
        </header>
    );
}
