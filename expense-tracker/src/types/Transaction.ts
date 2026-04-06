export interface Transaction {
    id: number | null;
    title: string;
    amount: number | null;
    type: 'Income' | 'Expense';
    date: string
}