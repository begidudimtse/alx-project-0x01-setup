import { UserProps } from "./index"; // make sure the path is correct

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProps | null;        // change UserData → UserProps
  onSubmit: (post: UserProps) => void; // add this line exactly
}
