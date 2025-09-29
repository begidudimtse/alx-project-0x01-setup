import { UserData } from "./index"; // or the correct path to UserData

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
  onSubmit: (post: UserData) => void; // ✅ added callback for submitting user
}
