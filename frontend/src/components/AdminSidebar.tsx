"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FolderKanban,
  Package,
  FileText,
  MessageSquare,
  Mail,
  Settings,
  LogOut,
  Ship,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Team", href: "/admin/team" },
  { icon: Briefcase, label: "Services", href: "/admin/services" },
  { icon: FolderKanban, label: "Projects", href: "/admin/projects" },
  { icon: Package, label: "Products", href: "/admin/products" },
  { icon: FileText, label: "Blog", href: "/admin/blog" },
  { icon: MessageSquare, label: "Inquiries", href: "/admin/inquiries" },
  { icon: Mail, label: "Messages", href: "/admin/messages" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <div className="w-64 bg-primary text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center space-x-2">
          <Ship className="w-8 h-8 text-secondary" />
          <div>
            <h1 className="font-outfit font-bold text-xl">Jibran C., Ltd</h1>
            <p className="text-xs text-white/60">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-secondary text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-3 px-4 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">{user?.name || "Admin"}</p>
            <p className="text-xs text-white/60">{user?.role || "Administrator"}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
