export type Props = {
  opened: boolean;
  title?: string;
  saveButtonDisabled?: boolean;
  onSave: () => void;
  onCancel: () => void;
};
