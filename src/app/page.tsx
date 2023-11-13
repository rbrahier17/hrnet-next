/**
 * Home Page (Create employee)
 */

import type { Metadata } from "next";
import EmployeeForm from "@/components/EmployeeForm";

// Definition of page metadata
export const metadata: Metadata = {
  title: "HRnet - Create Employee",
};

export default function HomePage() {
  return (
    <main className='py-6'>
      <h1 className='text-3xl font-extrabold tracking-tight mt-10 mb-7 w-2/4 mx-auto'>Create Employee</h1>
      <div className='w-2/4 mx-auto'>
        <EmployeeForm />
      </div>
    </main>
  );
}
