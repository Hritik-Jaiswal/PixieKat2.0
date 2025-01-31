"use client";

import { Card } from "@/components/ui/card";
import {
  ShoppingCart,
  DollarSign,
  Package,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    name: "Total Orders",
    value: "156",
    change: "+12.3%",
    changeType: "positive",
    icon: ShoppingCart,
  },
  {
    name: "Total Sales",
    value: "$12,545",
    change: "+15.1%",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    name: "Active Listings",
    value: "23",
    change: "-2.3%",
    changeType: "negative",
    icon: Package,
  },
  {
    name: "Conversion Rate",
    value: "4.3%",
    change: "+4.1%",
    changeType: "positive",
    icon: TrendingUp,
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    product: "League of Legends Account",
    date: "2025-01-30",
    amount: "$120.00",
    status: "completed",
  },
  {
    id: "ORD-002",
    product: "Steam Gift Card",
    date: "2025-01-29",
    amount: "$50.00",
    status: "processing",
  },
  {
    id: "ORD-003",
    product: "CS:GO Skins Bundle",
    date: "2025-01-28",
    amount: "$75.50",
    status: "completed",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your store performance and recent activity
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div
                className={`rounded-full p-2 ${
                  stat.changeType === "positive"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-muted-foreground"> from last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{order.product}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{order.amount}</p>
                  <p
                    className={`text-sm ${
                      order.status === "completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid gap-4">
            <button className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5" />
                <span>Create New Listing</span>
              </div>
              <span>→</span>
            </button>
            <button className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5" />
                <span>Withdraw Funds</span>
              </div>
              <span>→</span>
            </button>
            <button className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5" />
                <span>View All Orders</span>
              </div>
              <span>→</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
