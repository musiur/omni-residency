"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Mail, MoreHorizontal, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Payment } from "./types";
import { format } from "date-fns";

export const Columns___Booking: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Your Details
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { full_name, email, mobile } = row.original;
      return (
        <div>
          <p className="font-semibold">{full_name}</p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> {email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> {mobile}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "total_due",
    header: () => <div>Payment</div>,
    cell: ({ row }) => {
      const { subtotal, total_due, payment_status, paid } = row.original;

      const formatter = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "BDT",
        }).format(amount);
      };

      return (
        <div className="min-w-[160px]">
          <p className="font-semibold">Status: {payment_status}</p>
          <p>Subtotal: {formatter(subtotal)}</p>
          <p>Paid: {formatter(paid)}</p>
          <p className="text-primary">Due: {formatter(total_due)}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "branch",
    header: "Branch",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("branch")}</div>
    ),
  },
  {
    accessorKey: "check_in",
    header: "Check In",
    cell: ({ row }) => (
      <div className="capitalize text-green-400">
        {row.getValue("check_in")}
      </div>
    ),
  },
  {
    accessorKey: "check_out",
    header: "Check Out",
    cell: ({ row }) => (
      <div className="capitalize text-red-400">{row.getValue("check_out")}</div>
    ),
  },
  {
    accessorKey: "placed_at",
    header: "Placed At",
    cell: ({ row }) => (
      <div className="capitalize">
        {format(new Date(row.getValue("placed_at")), "PPP")}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
