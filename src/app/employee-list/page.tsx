/**
 * Employee List Page
 */

import type { Metadata } from "next";
import EmployeeListTable from "@/components/EmployeeListTable";

// Definition of page metadata
export const metadata: Metadata = {
  title: "HRnet - Employee List",
};

export default function EmployeeListPage() {
  return (
    <main className={`flex flex-col items-center py-6`}>
      <h1 className='text-3xl font-extrabold tracking-tight mt-10 mb-7 text-center'>Employee list</h1>
      <EmployeeListTable />
    </main>
  );
}
