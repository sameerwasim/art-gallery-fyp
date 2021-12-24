import React, { useMemo } from "react";
import { DashboardAsideMenuList } from "./DashboardAsideMenuList";
import { useHtmlClassService } from "../../../_core/MetronicLayout";

export function DashboardAsideMenu({ isActive }) {

  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true),
    };
  }, [uiService]);

  return (
    <div className={`tab-pane fade ${isActive && "show active"}`}>
      <div className="aside-menu-wrapper flex-column-fluid px-10 py-5">
        {/* begin::Menu Container */}
        <div
          id={`${isActive && "kt_aside_menu"}`}
          data-menu-vertical="3"
          className={`aside-menu min-h-lg-800px ${layoutProps.asideClassesFromConfig}`}
          {...layoutProps.asideMenuAttr}
        >
          <DashboardAsideMenuList layoutProps={layoutProps} />
        </div>
        {/* end::Menu Container */}
      </div>
    </div>
  );
}
