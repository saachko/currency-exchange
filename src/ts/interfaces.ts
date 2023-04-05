interface NavLink {
  id: string;
  name: string;
  path: string;
}

interface Contact {
  id: string;
  link: string;
  icon: JSX.Element;
  title: string;
}

interface Currency {
  Cur_ID: number;
  Date: string;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
}

interface SelectOption {
  value: string;
  label: string;
}

interface TableValues {
  id: number;
  abbr: string;
  name: string;
  scale: number;
  rate: number;
}

export type { NavLink, Contact, Currency, SelectOption, TableValues };
