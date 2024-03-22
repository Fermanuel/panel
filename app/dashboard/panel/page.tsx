"use client";

import { Card } from "@tremor/react";
import { AreaChartHero } from "@/app/components";

export default function PanelPage() {
    return (
      <div className="flex flex-col items-center justify-center flex-1 px-5">
        <div className="grid grid-cols-4 gap-3 pt-3 w-full">
          <Card>
            <div>
                <h1 className="text-xl text-white">Citas Realizadas</h1>
            </div>
            <div className="pt-5 text-right">
                <span className="text-white text-xl">10</span>
            </div>
          </Card>
          <Card>
            <div>
                <h1 className="text-xl text-white">Citas Canceladas</h1>
            </div>
            <div className="pt-5 text-right">
                <span className="text-white text-xl">2</span>
            </div>
          </Card>
          <Card>
            <div>
                <h1 className="text-xl text-white">Pacientes Atendidos</h1>
            </div>
            <div className="pt-5 text-right">
                <span className="text-white text-xl">6</span>
            </div>
          </Card>
          <Card>
            <div>
                <h1 className="text-xl text-white">No. Pacientes</h1>
            </div>
            <div className="pt-5 text-right">
                <span className="text-white text-xl">45</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-4 grid-rows-5 gap-4 pt-3 w-full">
            <span className="text-xl text-gray-700">Estadisticas del mes</span>

            <div className="pt-3">
                <Card>
                    <AreaChartHero />
                </Card>
            </div>
          </div>
      </div>
    );
}