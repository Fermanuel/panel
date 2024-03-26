'use client';

import { Card } from "@tremor/react";
import { AreaChartHero } from "@/app/components";
import { BarChartHero } from "@/app/components";

export default function PanelPage() {
    return (
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-4 gap-3 pt-3">
          
          <Card>
            <div>
              <h1 className="text-xl text-black">Citas Realizadas</h1>
            </div>
            <div className="pt-5 text-right">
              <span className="text-black text-xl">10</span>
            </div>
          </Card>

          <Card>
            <div>
              <h1 className="text-xl text-black">Citas Canceladas</h1>
            </div>
            <div className="pt-5 text-right">
              <span className="text-black text-xl">2</span>
            </div>
          </Card>

          <Card>
            <div>
              <h1 className="text-xl text-black">Pacientes Atendidos</h1>
            </div>
            <div className="pt-5 text-right">
              <span className="text-black text-xl">6</span>
            </div>
          </Card>

          <Card>
            <div>
              <h1 className="text-xl text-black">No. Pacientes</h1>
            </div>
            <div className="pt-5 text-right">
              <span className="text-black text-xl">45</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-4 pt-3 gap-3">
          
          <div className="w-full col-span-2">
            <Card>
              <AreaChartHero />
            </Card>
          </div>

          <div className="w-full col-span-2">
            <Card>
              <BarChartHero />
            </Card>
          </div>
        </div>
      </div>
    );
}