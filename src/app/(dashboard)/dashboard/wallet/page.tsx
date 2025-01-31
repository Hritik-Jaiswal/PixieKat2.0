"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  {
    id: "TRX-001",
    type: "deposit",
    amount: "+$500.00",
    method: "Bank Transfer",
    status: "completed",
    date: "2025-01-30",
  },
  {
    id: "TRX-002",
    type: "withdrawal",
    amount: "-$200.00",
    method: "PayPal",
    status: "processing",
    date: "2025-01-29",
  },
  {
    id: "TRX-003",
    type: "deposit",
    amount: "+$150.00",
    method: "Stripe",
    status: "completed",
    date: "2025-01-28",
  },
  {
    id: "TRX-004",
    type: "withdrawal",
    amount: "-$75.00",
    method: "Bank Transfer",
    status: "completed",
    date: "2025-01-27",
  },
];

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Wallet</h2>
        <p className="text-muted-foreground">
          Manage your balance and view transaction history
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Available Balance
              </p>
              <p className="text-2xl font-bold">$1,234.56</p>
            </div>
            <div className="rounded-full p-2 bg-primary/10 text-primary">
              <DollarSign className="h-4 w-4" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Pending Balance
              </p>
              <p className="text-2xl font-bold">$245.00</p>
            </div>
            <div className="rounded-full p-2 bg-yellow-100 text-yellow-600">
              <DollarSign className="h-4 w-4" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Deposits
              </p>
              <p className="text-2xl font-bold">$3,567.89</p>
            </div>
            <div className="rounded-full p-2 bg-green-100 text-green-600">
              <ArrowDownRight className="h-4 w-4" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Withdrawals
              </p>
              <p className="text-2xl font-bold">$2,333.33</p>
            </div>
            <div className="rounded-full p-2 bg-red-100 text-red-600">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1">Deposit</Button>
        <Button className="flex-1" variant="outline">
          Withdraw
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {transaction.id}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center gap-1 ${
                      transaction.type === "deposit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "deposit" ? (
                      <ArrowDownRight className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                    {transaction.type}
                  </span>
                </TableCell>
                <TableCell
                  className={
                    transaction.type === "deposit"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {transaction.amount}
                </TableCell>
                <TableCell>{transaction.method}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      transaction.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell>{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
