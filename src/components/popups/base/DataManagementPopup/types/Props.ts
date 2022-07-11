export type Props = {
  opened: boolean;
  title?: string;
  saveButtonDisabled?: boolean;
  children: React.ReactNode;
  onSave: () => void;
  onCancel: () => void;
};
