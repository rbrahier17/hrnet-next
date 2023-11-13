/**
 * Employee Form: Date Field component
 */

// Importing React Hook Form types for form control
import { Control } from "react-hook-form";

// Import components
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/shadcn-ui/form";
import { Button } from "@/components/shadcn-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn-ui/popover";
import { Calendar } from "@/components/shadcn-ui/calendar";
import { CalendarIcon } from "lucide-react";

// Importing the date formatting function from date-fns library
import { format } from "date-fns";

// Importing utility function to conditionally concatenate class names
import { cn } from "@/lib/utils";

interface DateFieldProps {
  control: Control<any>;
  name: string;
  title: string;
}

/**
 * Renders a form input for selecting a date. When activated, it displays a popover
 * containing a calendar for date selection.
 *
 * @param props - DateFieldProps
 * @param props.control - React Hook Form control object.
 * @param props.name - The name of the date field.
 * @param props.title - The input label.
 * @returns The rendered DateField component.
 */
export function DateField({ control, name, title }: DateFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{title}</FormLabel>

          {/* Popover for a date picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("justify-start text-left font-normal", !field.value && "text-muted-foreground")}
              >
                <CalendarIcon className='mr-2 w-4' />
                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>

            <PopoverContent align='start' className='w-auto p-0'>
              <Calendar
                mode='single'
                captionLayout='dropdown-buttons'
                selected={field.value}
                onSelect={field.onChange}
                fromYear={1910}
                toYear={new Date().getFullYear()}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
