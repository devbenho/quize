import data from "./lang.json";
export interface DropdownItem {
  name: string;
  href: string;
  badge?: string;
}

export interface MenuItem {
  name: string;
  href?: string;
  icon?: React.ReactNode;
  dropdownItems?: DropdownItem[];
  badge?: string;
}

export const menuItems: MenuItem[] = [
  {
    name: data["ar"].technical_reports_and_repairs,
  },
  {
    name: data["ar"].technical_reports,
    dropdownItems: [
      {
        name: data["ar"].technical_reports_create,
        href: "/create-technical-report",
      },
      {
        name: data["ar"].technical_reports_list,
        href: "/list-technical-reports",
      },
    ],
  },
  {
    name: data["ar"].repair_reports,
    dropdownItems: [
      {
        name: data["ar"].repair_reports_create,
        href: "/create-repair-report",
      },
      {
        name: data["ar"].repair_reports_list,
        href: "/list-repair-reports",
      },
    ],
  },
];
