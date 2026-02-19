import {Home, Tv, Film, Bell, Bookmark,Settings,LogOut, Gift } from "lucide-react";

function SideBar({isSidebarOpen}){
    const MainMenu = [
        {name: "Home", icon: Home},
        {name: "Series", icon: Tv},
        {name: "Movies", icon: Film},
        {name: "Notifications", icon: Bell },
        {name: "My List", icon: Bookmark },
        {name: "Gifts", icon: Gift },
    ]
    const BottomMenu = [
        {name: "Settings", icon: Settings},
        {name: "Logout", icon: LogOut},
    ];

    return(
        <>
            {isSidebarOpen && <div className="absolute top-0 left-0 h-full w-[50%] bg-netflix-gray z-50 ">
                <div className="h-full flex flex-col justify-between text-netflix-light-gray">
                <div className="flex  items-center gap-4  p-4">
                    <img src="/images/profile.svg" alt="" className="h-9 cursor-pointer"/>
                    <div className="leading-none">
                        <h1 className="text-lg font-semibold text-white">Gagan</h1>
                        <p className="text-sm">switch Profiles</p>
                    </div>
                </div>

                <div>
                    {MainMenu.map((item, index) => {
                        
                         const Icon = item.icon
                         
                         return(
                            <>
                                <div key={index}  className="flex  hover:bg-gray-300 cursor-pointer p-6 gap-5 ">
                                    <Icon size={25}></Icon>
                                    <span className="text-xl">{item.name}</span>
                                </div>
                            </>
                         )
                    })}
                </div>

                <div className="border-t border-gray-300 py-2 mb-2">
                   {
                    BottomMenu.map((item , index) => {
                        const Icon = item.icon;
                            return(
                                <>
                                    <div key={index} className="flex gap-5 text-xl px-4 py-2 cursor-pointer ">
                                        <Icon size={26}></Icon>
                                        <span className="">{item.name}</span>
                                    </div>
                                </>
                            )
                    })
                   }
                </div>
            </div>
            </div>
    }
        </>
    )
}
export default SideBar