/**
 * Employee Form: Select Field component
 */

// Importing React Hook Form types for form control
import { Control } from "react-hook-form";

// Import components
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn-ui/form";
import { ScrollArea } from "@/components/shadcn-ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn-ui/select";

interface SelectFieldProps {
  control: Control<any>;
  name: string;
  title: string;
  options: { value: string; label: string }[];
}

/**
 * Renders a form input for selecting options from a dropdown. When activated, it displays
 * a dropdown menu with selectable options.
 *
 * @param props - SelectFieldProps.
 * @param props.control - React Hook Form control object.
 * @param props.name - The name of the select field.
 * @param props.title - The input label.
 * @param props.options - An array of options with values and labels.
 * @returns The rendered SelectField component.
 */
export function SelectField({ control, name, title, options }: SelectFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={`Select a ${title}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.length > 8 ? (
                <ScrollArea className='h-64'>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </ScrollArea>
              ) : (
                options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
