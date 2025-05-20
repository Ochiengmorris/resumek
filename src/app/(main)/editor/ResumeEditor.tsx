"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import BreadCrumb from "./BreadCrumbs";

const ResumeEditor = () => {
  const searchParams = useSearchParams();

  const currentStep = searchParams.get("step") || steps[0].key;

  // function setStep(key: string) {
  //   const newSearchParams = new URLSearchParams(searchParams);
  //   newSearchParams.set("step", key);
  //   window.history.replaceState(null, "", `?${newSearchParams.toString()}`);
  // }

  const setTheStep = (key: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    console.log("newSearchParams", newSearchParams);
    // console.log("window.history", window.history);
    console.log("newSearchParamsstring", newSearchParams.toString());
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  };

  const FormComponent = steps.find((step) => {
    // console.log(step.key, currentStep);
    return step.key === currentStep;
  })?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your Resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps to create your resume. Your progress will be saved
          automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="w-full space-y-6 overflow-y-auto p-3 md:w-1/2">
            <BreadCrumb currentStep={currentStep} setCurrentStep={setTheStep} />
            {FormComponent && <FormComponent />}
          </div>
          <div className="grow md:border-r" />
          <div className="hidden w-1/2 md:flex">Right</div>
        </div>
      </main>
      <footer className="w-full border-t px-3 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="secondary">Prevoius Step</Button>
            <Button>Next Step</Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant={"secondary"} asChild>
              <Link href={"/resumes"}>Close</Link>
            </Button>
            <p className="text-muted-foreground text-sm opacity-0">Saving...</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeEditor;
