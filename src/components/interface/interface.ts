export interface Idata {
  name?: string;
  height?: string;
  mass?: string;
  birth_year?: string;
  url?: string;
}

export interface IErrorButton {
  onClick: () => void;
}

export interface IMainComponent {
  data: Idata[];
  value: string | null;
  first: boolean;
}
export interface IHeaderComponent {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorClick: () => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  limitValue: string;
}
export interface ISelectItemPage {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}
export interface IPagination {
  data: Idata[];
}
