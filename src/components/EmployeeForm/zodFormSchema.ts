/**
 * Zod schema for form validation using the Zod library.
 * Defines the structure and validation rules for the employee form fields.
 */

import * as z from "zod";

export const zodFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  birthDate: z.date({
    required_error: "Required",
  }),
  startDate: z.date({
    required_error: "Required",
  }),
  street: z.string().min(2, {
    message: "The street must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "The street must be at least 2 characters.",
  }),
  state: z.string().min(1, {
    message: "Please select your State",
  }),
  zipCode: z.coerce
    .number({
      required_error: "Please enter a Zip Code",
      invalid_type_error: "Zip Code must be a number",
    })
    .gte(10000, {
      message: "Zip Code must be a 5-digit number ",
    })
    .lte(99999, {
      message: "Zip Code must be a 5-digit number ",
    }),
  department: z.string().min(1, {
    message: "Please select your Department",
  }),
});
