"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import AdminSidebar from "@/components/AdminSidebar";
import api from "@/lib/api";
import {
  Users,
  Briefcase,
  FolderKanban,
  FileText,
  Package,
  MessageSquare,
  Mail,
  TrendingUp,
} from "lucide-react";

interface DashboardStats {
  totalServices: number;
  totalTeamMembers: number;
  totalProjects: number;
  totalBlogPosts: number;
  totalProducts: number;
  totalInquiries: number;
  totalContactMessages: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }

    const fetchStats = async () => {
      try {
        const response = await api.get("/dashboard/stats");
        setStats(response.data.stats);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [isAuthenticated, router]);

  const statCards = [
    {
      icon: Briefcase,
      label: "Services",
      value: stats?.totalServices || 0,
      color: "bg-blue-500",
    },
    {
      icon: Users,
      label: "Team Members",
      value: stats?.totalTeamMembers || 0,
      color: "bg-green-500",
    },
    {
      icon: FolderKanban,
      label: "Projects",
      value: stats?.totalProjects || 0,
      color: "bg-purple-500",
    },
    {
      icon: FileText,
      label: "Blog Posts",
      value: stats?.totalBlogPosts || 0,
      color: "bg-orange-500",
    },
    {
      icon: Package,
      label: "Products",
      value: stats?.totalProducts || 0,
      color: "bg-pink-500",
    },
    {
      icon: MessageSquare,
      label: "Inquiries",
      value: stats?.totalInquiries || 0,
      color: "bg-yellow-500",
    },
    {
      icon: Mail,
      label: "Messages",
      value: stats?.totalContactMessages || 0,
      color: "bg-red-500",
    },
    {
      icon: TrendingUp,
      label: "Growth",
      value: "+12%",
      color: "bg-teal-500",
    },
  ];

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 ml-64">
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <h1 className="text-3xl font-outfit font-black text-foreground">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </header>

        <main className="p-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${card.color} p-3 rounded-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-outfit font-black text-foreground mb-1">
                      {card.value}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {card.label}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-outfit font-bold text-foreground mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors">
                  <span className="font-medium text-secondary">Add New Service</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors">
                  <span className="font-medium text-secondary">Create Blog Post</span>
                </button>
                <button className="w-full text-left px-4 py-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors">
                  <span className="font-medium text-secondary">Add Team Member</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-outfit font-bold text-foreground mb-4">
                System Status
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Database</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">API Server</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Running
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email Service</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
