import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Resumes",
};

const Page = () => {
  return (
    <main>
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href={"/editor"}>
          <Plus className="h-5 w-5" />
          New Resume
        </Link>
      </Button>
    </main>
  );
};

export default Page;
