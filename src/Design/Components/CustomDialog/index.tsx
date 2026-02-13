import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomIconButton from "../Buttons/IconButton";
import Grid from "@mui/material/Grid";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
}

const CustomDialog = ({
  open,
  onClose,
  title,
  maxWidth = "sm",
  children,
}: CustomDialogProps) => {
  return (
    <>
      <Dialog open={open} maxWidth={maxWidth} onClose={onClose}>
        <DialogTitle>
          <Grid container spacing={2}>
            <Grid size={10}>{title && <h3>{title}</h3>}</Grid>
            <Grid size={2} sx={{ textAlign: "right" }}>
              <CustomIconButton
                ariaLabel="close"
                icon="close"
                onClick={onClose}
                buttonColor="blue"
              />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default CustomDialog;
