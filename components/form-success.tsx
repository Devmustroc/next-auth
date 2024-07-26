import { CheckCircleIcon } from "lucide-react";
import { BsExclamationTriangle } from "react-icons/bs";

interface FormSuccessProps {
    message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) {
        return null;
    }
  return (
    <div
        className="bg-emerald-400/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-400"
    >
        <CheckCircleIcon
            className="size-4 mr-2"
        />
        <p>
            {message}
        </p>
    </div>
  )
}

export default FormSuccess;
