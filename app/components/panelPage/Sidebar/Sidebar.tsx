import Image from 'next/image'
import { IoMedalOutline, IoPeopleOutline, IoStatsChartOutline, IoPersonOutline } from 'react-icons/io5'
import { SidebarItem } from '../..';



const menuItems = [
    {
        path: '/dashboard/panel',
        icon: <IoStatsChartOutline size={30} />,
        title: 'Panel',
        subtitle: 'Información general'
    },
    {
        path: '/dashboard/citas',
        icon: <IoPeopleOutline size={30}/>,
        title: 'Citas',
        subtitle: 'Gestionar citas'
    },
    {
      path: '/dashboard/pacientes',
      icon: <IoPersonOutline size={30}/>,
      title: 'Pacientes',
      subtitle: 'Gestionar pacientes'
  }
];


export const Sidebar = () => {
  return (
    <div id="menu" style={{width: '300px'}} className="fixed bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">


      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          
          <IoMedalOutline className='mr-2'/>

          <span>Dash</span>
          <span className="text-blue-500">1</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Sistema Administrativo de Psicologia
        </p>
      </div>


      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="avatar de usuario"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Fernando Espinosa
          </span>
        </a>
      </div>


      <div id="nav" className="w-full px-6">


        {
            menuItems.map((item) => (
                <SidebarItem key={item.path} {...item} />
            ))
        }

      </div>
    </div>
  );
}