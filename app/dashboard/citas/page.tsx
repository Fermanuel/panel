"use client";

import { Card } from "@tremor/react";
import { Calendario } from "@/app/components";
import { Button } from "@tremor/react";

export default function citasPage(){
  return (
    <div className="container mx-auto px-5">
      <div className="grid-cols-4 gap-3 pt-3 flex items-center justify-center">
        <Card className="h-screen">
          <Calendario/>
        </Card>
      </div>
      <div className="col-span-4 row-span-1 flex items-end justify-end pt-5">
        <Button>Crear nueva cita</Button>
      </div>
    </div>
  );
}