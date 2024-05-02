import React, { useEffect, useState } from 'react';
import { Card } from '@tremor/react';

interface DataItem {
  name: string;
  stat: number;
  change: string;
  changeType: string;
}

const data: DataItem[] = [
  {
    name: 'Citas agendadas',
    stat: 7,
    change: '+12.1%',
    changeType: 'positive',
  },
  {
    name: 'Citas canceladas',
    stat: 2,
    change: '-3.1%',
    changeType: 'negative',
  },
  {
    name: 'Pacientes atendidos',
    stat: 5,
    change: '+7.7%',
    changeType: 'positive',
  },
  {
    name: 'Pacientes totales',
    stat: 62,
    change: '+2.7%',
    changeType: 'positive',
  },
];

export const PkiCard: React.FC = () => {
  
  const [stats, setStats] = useState<DataItem[]>([]);

  useEffect(() => {
    const animationDuration = 1000; // Duración de la animación en milisegundos

    // Iniciar la animación para cada estadística
    const animationIntervals = data.map((item) => {
      const statIncrement = item.stat / (animationDuration / 100); // Incremento de la estadística en cada intervalo
      let currentStat = 0;

      // Crear un intervalo para incrementar gradualmente el valor de la estadística
      const animationInterval = setInterval(() => {
        currentStat += statIncrement;
        if (currentStat >= item.stat) {
          // Detener la animación cuando se alcanza el valor deseado
          clearInterval(animationInterval);
          currentStat = item.stat;
        }
        setStats((prevStats) =>
          prevStats.map((prevStat) =>
            prevStat.name === item.name ? { ...prevStat, stat: currentStat } : prevStat
          )
        );
      }, 30); // Intervalo de 10 ms para una animación suave
      return animationInterval;
    });

    return () => {
      // Limpiar todos los intervalos cuando el componente se desmonta
      animationIntervals.forEach((interval) => clearInterval(interval));
    };
  }, []); // Ejecutar el efecto solo una vez al montar el componente

  useEffect(() => {
    // Inicializar los valores de estadísticas al cargar el componente
    setStats(data);
  }, []);

  return (
    <>
      {stats.map((item) => (
        <Card key={item.name}>
          <div className="flex items-center justify-between">
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
            <span
              className={`${
                item.changeType === 'positive'
                  ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                  : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20'
              } inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset`}
            >
              {item.change}
            </span>
          </div>
          <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {Math.round(item.stat)}
          </p>
        </Card>
      ))}
    </>
  );
};
