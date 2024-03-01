

import { Link } from "react-router-dom";

import { isActiveLink } from "./LinkActiveChecker";
import { useLocation } from "react-router-dom";

const SidebarEvent = ({ isOpen, handleToggle, slug }) => {
  const { pathname } = useLocation();

  const sidebarContent = [
   
    {
      id: 1,
      name: "Event",
      routePath: `/event/${slug}`,
    },
    {
      id: 2,
      name: "Metrics",
      routePath: `/metrics`,
    },
    
  ];

  return (
<div className={`sidebar -dashboard ${isOpen ? 'open' : ''}`}>
     {sidebarContent.map((item) => {
        const baseRoutePath = item.routePath.split("?")[0];

        return (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${
              isActiveLink(baseRoutePath, pathname) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              to={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
              style={{ textDecoration: 'none' }}
             // onClick={() => setBreadcrumbName(item.name)}
            >
              {item.name}
            </Link>
          </div>
        </div>
      )})}
    </div>
  );
};

export default SidebarEvent;
