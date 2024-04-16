"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";

interface UnblockButtonProps {
  userId: string;
};

export const UnblockButton = ({
  userId,
}: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) => toast.success(`Пользователь ${result.blocked.username} разблокирован`))
        .catch(() => toast.error("Что-то пошло не так"))
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant="link"
      size="sm"
      className="text-blue-500 w-full"
    >
      Разблокировать пользователя
    </Button>
  )
}