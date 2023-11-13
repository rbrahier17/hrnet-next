/**
 * Employee List Table component
 */

"use client"

// Import hooks
import { useEffect, useState } from "react";
import { useFormDataContext } from "@/contexts/FormDataContext";

// Import components
import LoadingSpinner from "./LoadingSpinner";
import { DataTable } from "react-data-tables-plugin";

// Import and initialize Inter font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap", adjustFontFallback: false });


export default function EmployeeListTable() {
  // Accessing form data from the FormDataContext
  const { formData } = useFormDataContext();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define the columns for the DataTable
  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "birthDate" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  // Render the DataTable if the component is mounted, otherwise show the LoadingSpinner
  return isMounted ? (
    <DataTable
      key={formData.length}
      columns={columns}
      data={formData}
      className={inter.className}
      mainColor='#0F172A'
      accentColor='#5fc9f3'
    />
  ) : (
    <LoadingSpinner />
  );
}
