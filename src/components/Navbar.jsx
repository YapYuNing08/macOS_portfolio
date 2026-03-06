import dayjs from "dayjs";

import { navLinks, navIcons } from "#constants/index.js";


const Navbar = () => {
    return (
        <nav>
            {/* Left Side: Logo, Name, and Text Links */}
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Yu Ning's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name}) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Icons */}
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
            </div>

            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </nav>
    );
};

export default Navbar;