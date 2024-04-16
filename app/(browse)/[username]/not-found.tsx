import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return ( 
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <p>
        Пользователь не найден.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">
          Вернуться на домашнюю страницу
        </Link>
      </Button>
    </div>
  );
};
 
export default NotFoundPage;