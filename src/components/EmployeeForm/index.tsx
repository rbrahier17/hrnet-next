/**
 * Employee Form component
 */

"use client";

// Hooks
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormDataContext } from "@/contexts/FormDataContext";

// Zod (form validation library)
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodFormSchema } from "./zodFormSchema";

// Components
import { Form } from "@/components/shadcn-ui/form";
import { TextField } from "./field-components/TextField";
import { DateField } from "./field-components/DateField";
import { SelectField } from "./field-components/SelectField";
import { Button } from "@/components/shadcn-ui/button";
import { ConfirmationDialog } from "./ConfirmationDialog";
import RandomDataButton from "./RandomDataButton";

// Data for select inputs
import { states } from "@/data/states";
import { departments } from "@/data/departments";

// Utils
import { formatDate } from "./utils/formatDate";
import { v4 as uuidv4 } from "uuid"; // Lib to generate unique identifiers

/**
 * Employee Form component for capturing and validating employee data.
 *
 * 
 * @returns The rendered EmployeeForm.
 */
export default function EmployeeForm() {
  // Context hook for managing form data
  const { formData, setFormData } = useFormDataContext();

  // State for controlling the visibility of the confirmation dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  // React Hook Form setup
  const form = useForm<z.infer<typeof zodFormSchema>>({
    resolver: zodResolver(zodFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: undefined,
      startDate: undefined,
      street: "",
      city: "",
      state: "",
      // @ts-ignore (TypeScript ignored because of this issue: https://github.com/orgs/react-hook-form/discussions/6980)
      zipCode: "",
      department: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof zodFormSchema>) {
    // Format form data before adding to the global state
    const formattedData = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthDate: formatDate(values.birthDate),
      startDate: formatDate(values.startDate),
      street: values.street,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode.toString(),
      department: values.department,
      id: uuidv4(),
    };

    // Update the global form data state
    setFormData([...formData, formattedData]);

    // Open the confirmation dialog
    setIsDialogOpen(true);
  }

  // Toggle the confirmation dialog's visibility
  const onOpenChange = () => {
    setIsDialogOpen((current) => !current);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-7'>
          <TextField control={form.control} name='firstName' title='First Name' placeholder='John' />
          <TextField control={form.control} name='lastName' title='Last Name' placeholder='Doe' />
          <DateField control={form.control} name='birthDate' title='Date of Birth' />
          <DateField control={form.control} name='startDate' title='Start Date' />

          <fieldset className='border-4 border-solid p-3 border-primary space-y-5'>
            <legend className='font-bold px-1'>Address</legend>
            <TextField control={form.control} name='street' title='Street' placeholder='123 Main Street' />
            <TextField control={form.control} name='city' title='City' placeholder='New York' />
            <SelectField
              control={form.control}
              name='state'
              title='State'
              options={states.map((state) => ({ value: state.abbreviation, label: state.name }))}
              aria-label='Select a state'
            />

            <TextField control={form.control} name='zipCode' title='Zip Code' placeholder='10001' type='number' />
          </fieldset>

          <SelectField
            control={form.control}
            name='department'
            title='Department'
            options={departments.map((dep) => ({ value: dep, label: dep }))}
            aria-label='Select a department'
          />

          {/* Submit Button */}
          <Button type='submit' className='block mx-auto w-full' aria-label='Submit'>
            Submit
          </Button>
        </form>
        {/* FOR TESTING PURPOSES: BUTTON TO AUTOMATICALLY FILL THE FORM WITH RANDOM DATA */}
        <RandomDataButton form={form} />
      </Form>

      {/* Confirmation Dialog Component */}
      <ConfirmationDialog isOpen={isDialogOpen} onOpenChange={onOpenChange} />
    </>
  );
}
