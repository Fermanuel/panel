'use client';

import { Card } from "@tremor/react";
import { AreaChartHero } from "@/app/components";
import { BarChartHero } from "@/app/components";
import { PkiCard } from "@/app/components";

export default function PanelPage() {
    return (
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-4 gap-3 pt-3">
          <PkiCard />
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