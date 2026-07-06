export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
}

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  client: string;
  category: "government" | "corporate" | "events";
  year: number;
  descAr: string;
  descEn: string;
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  labelAr: string;
  labelEn: string;
}

export interface Value {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
}
