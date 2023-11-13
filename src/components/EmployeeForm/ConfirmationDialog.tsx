/**
 * Employee Form: Confirmation Dialog component
 */

// Import components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn-ui/dialog";
import { Button } from "@/components/shadcn-ui/button";
import Link from "next/link";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onOpenChange(open: boolean): void;
}

/**
 * Renders a confirmation dialog to notify the user that a new employee has been created.
 * Provides a link to navigate to the employee list.
 *
 * @param props - ConfirmationDialogProps
 * @param props.isOpen - Determines whether the dialog is open or closed.
 * @param props.onOpenChange - Callback function to handle changes in the dialog's open state.
 * @returns The rendered ConfirmationDialog component.
 */
export function ConfirmationDialog({ isOpen, onOpenChange }: ConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Employee Created ✅</DialogTitle>
          <DialogDescription>A new employee has been added to the employee list.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {/* Button with a Link to the Employee List */}
          <Button asChild>
            <Link href='/employee-list'>Employee List</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
