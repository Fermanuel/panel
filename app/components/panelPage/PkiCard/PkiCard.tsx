// 'use client';
import { Card } from '@tremor/react';

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Citas agendadas',
    stat: '7',
    change: '+12.1%',
    changeType: 'positive',
  },
  {
    name: 'Citas canceladas',
    stat: '2',
    change: '-3.1%',
    changeType: 'negative',
  },
  {
    name: 'Pacientes atendidos',
    stat: '5',
    change: '+7.7%',
    changeType: 'positive',
  },
  {
    name: 'Pacientes totales',
    stat: '62',
    change: '+2.7%',
    changeType: 'positive',
  },
];

export const PkiCard = () => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.name}>
          <div className="flex items-center justify-between">
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
            <span
              className={classNames(
                item.changeType === "positive"
                  ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20"
                  : "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
                "inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset"
              )}
            >
              {item.change}
            </span>
          </div>
          <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {item.stat}
          </p>
        </Card>
      ))}
    </>
  );
}