/**
 * Employee Form: Text Field component
 */

// Importing React Hook Form types for form control
import { Control } from "react-hook-form";

// Import components
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";

interface TextFieldProps {
  control: Control<any>;
  name: string;
  title: string;
  placeholder: string;
  type?: string;
}

/**
 * Renders a text input.
 *
 * @param props - TextFieldProps
 * @param props.control - React Hook Form control object.
 * @param props.name - The name of the text field.
 * @param props.title - The input label.
 * @param props.placeholder - The input placeholder.
 * @param props.type - The type of the text input (e.g., "text", "password").
 * @returns The rendered TextField component.
 */
export function TextField({ control, name, title, placeholder, type }: TextFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
