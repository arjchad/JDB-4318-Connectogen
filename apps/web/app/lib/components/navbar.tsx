"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@repo/ui/components/logo";
import { InboxIcon, UserCircle } from "lucide-react";

export default function NavBar() {
    const pathname = usePathname()
    return (
        <div className="flex items-center border-b border-border h-[68px]">
            <nav className="flex w-full px-9">
                <div className="mr-9"><Logo/></div>
                <ul className="flex gap-x-4 grow">
                    <li ><Link className={pathname.startsWith("/projects") ? "text-foreground" : "text-muted-foreground"} href="/projects">Projects</Link></li>
                    <li ><Link className={pathname.startsWith("/mentorship") ? "text-foreground" : "text-muted-foreground"} href="/mentorship">Mentorship</Link></li>
                    <li ><Link className={pathname.startsWith("/log") ? "text-foreground" : "text-muted-foreground"} href="/log">Log</Link></li>
                </ul>
                <div className="flex gap-x-6">
                    <InboxIcon/>
                    <UserCircle/>
                </div>
            </nav>
        </div>
    );
}