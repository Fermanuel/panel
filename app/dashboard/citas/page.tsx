"use client";

import { Card } from "@tremor/react";
import { Calendario } from "@/app/components";
import { Button } from "@tremor/react";

export default function citasPage(){  
  return (
    <div className="container mx-auto px-5">
      <div className="col-span-4 row-span-5 flex items-center justify-center">
        <Card className="w-screen h-screen">
          <Calendario/>
        </Card>
      </div>
      <div className="col-span-4 row-span-1 flex items-end justify-end pt-3">
        <Button>Crear nueva cita</Button>
      </div>
    </div>
  );
}