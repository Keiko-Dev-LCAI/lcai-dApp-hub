"use client";

import { Copy } from "lucide-react";
import { ReactNode } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  copyText: string;
  children?: ReactNode;
  className?: string;
}

const CopyButton = ({ copyText, children, className }: CopyButtonProps) => {
  const handleCopy = () => {
    if (!copyText) return;
    navigator.clipboard.writeText(copyText);
    toast.success('Copied Successful', {
      position: "bottom-right",
      style: {
        backgroundColor: "var(--color-surface-success-subtle)",
        color: "var(--color-content-success-light)",
        borderColor: "var(--color-surface-success-default)"
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`cursor-pointer flex items-center justify-center ${className || ""}`}
    >
      {children ? children : <Copy className="size-4" />}
    </button>
  );
};

export default CopyButton;