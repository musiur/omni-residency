export type Payment = {
    id: string;
    full_name: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
    mobile: string;
    check_in: string;
    check_out: string;
    branch: string;
    placed_at: string;
    subtotal: number;
    total_due: number;
    paid: number;
    payment_status: "pending" | "processing" | "success" | "failed";
};