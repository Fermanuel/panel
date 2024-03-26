"use client";

import { Card } from "@tremor/react";
import { Calendario } from "@/app/components";

export default function citasPage(){  
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 p-10">
      <div className="col-span-5 row-span-5 flex items-center justify-center">
        <Card className="w-full h-full">
          <Calendario/>
        </Card>
      </div>
    </div>
  );
}