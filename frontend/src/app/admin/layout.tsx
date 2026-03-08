import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Jibran C., Ltd",
  description: "Content Management System",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
