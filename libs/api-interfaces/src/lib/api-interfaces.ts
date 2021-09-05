export interface Message {
  message: string;
}


export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity{
  titile: string;
  description: string;
}