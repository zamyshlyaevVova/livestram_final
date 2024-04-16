"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { onBlock, onUnblock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
};

export const Actions = ({
  isFollowing,
  userId,
}: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`Вы подписались на ${data.following.username}`))
        .catch(() => toast.error("Что-то пошло не так"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`Вы отписались от ${data.following.username}`))
        .catch(() => toast.error("Что-то пошло не так"));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  }

  const handleBlock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => toast.success(`Разблокировать пользователя ${data.blocked.username}`))
        .catch(() => toast.error("Что-то пошло не так"));
    });
  };

  return (
    <>
    <Button 
      disabled={isPending} 
      onClick={onClick} 
      variant="primary"
    >
      {isFollowing ? "Отписаться" : "Подписаться"}
    </Button>
    <Button onClick={handleBlock} disabled={isPending}>
      Block
    </Button>
    </>
  );
};
