export type InvoiceType = {
  id: string
  amount: number;
  code: string;
  status: "pending" | "processing" | "success" | "failed";
  date: string
}

export const invoices: InvoiceType[] = [
  {
    id: "728ed52f",
    code: "JQDSA-43K",
    amount: 100,
    status: "pending",
    date: '23 Aug 2025',

  },
  {
    id: "489e1d42",
    code: "JGHJK-43K",
    amount: 125,
    status: "processing",
    date: '24 Aug 2025',
  },
  {
    id: "489e1dsad",
    code: "ASXSA-34M",
    amount: 2299,
    status: "success",
    date: '25 Aug 2025',
  },
  {
    id: "489e1dvc",
    code: "BVVCD-34M",
    amount: 2299,
    status: "failed",
    date: '26 Aug 2025',
  },
]
