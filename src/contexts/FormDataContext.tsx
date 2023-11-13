/**
 * Form Data Context
 */

"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

interface FormDataContext {
  formData: FormData[];
  setFormData: React.Dispatch<React.SetStateAction<FormData[]>>;
}

// Creating a context
const FormDataContext = createContext<FormDataContext | undefined>(undefined);

// Provider component for the FormDataContext
export function FormDataContextProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData[]>([]);

  // Providing the context value to its children
  return <FormDataContext.Provider value={{ formData, setFormData }}>{children}</FormDataContext.Provider>;
}

// Custom hook for conveniently accessing the FormDataContext
export function useFormDataContext() {
  const context = useContext(FormDataContext);

  // Throwing an error if the hook is not used within a FormDataContextProvider
  if (!context) {
    throw new Error("useFormDataContext must be used within a FormDataContextProvider");
  }

  // Returning the context value
  return context;
}
