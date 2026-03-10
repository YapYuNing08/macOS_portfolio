import WindowControls from "#components/WindowControls.jsx";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import clsx from "clsx";
import useLocationStore from "#store/location.js"; 
import { locations } from "#constants/index.js";
import useWindowStore from "#store/window.js";

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => { 
        if (item.fileType === 'pdf') return openWindow('resume');
        if (item.fileType === 'txt') return openWindow('txtfile', item);
        if (item.kind === 'folder') return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");
    
        openWindow(`${item.name}.${item.kind}`, item);
    };


    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>

            <ul>
                {items.map((item) => (
                <li 
                    key={item.id} onClick={() => 
                    setActiveLocation(item)} 
                    className={clsx(
                    item.id === activeLocation.id ? "active" : "not-active",
                    )}
                >
                    <img src={item.icon} className="w-4" alt={item.name} />
                    <p className="text-sm font-medium truncate">{item.name}</p>
                </li>
            ))}
            </ul>
        </div>
    );

    return (
        <>
            <div className="w-[800px] h-[75vh] flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden">
                <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 shrink-0">
                    <WindowControls target="finder" />
                    <Search className="w-4 h-4 text-gray-400" />
                </div>

                <div className="bg-white flex h-full">
                    <div className="sidebar">
                        {renderList('Favourites', Object.values(locations))}
                        {renderList('My Projects', locations.work.children)}
                    </div>

                    <ul className="content">
                        {activeLocation.children.map((item) => (
                            <li 
                                key={item.id} 
                                className={item.position}
                                onClick={() => openItem(item)}
                            >
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </>
    ); 
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow; 