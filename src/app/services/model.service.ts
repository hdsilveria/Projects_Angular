export interface Items {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  complete: number;
}

export interface RequestCreate {
  name: string;
  complete: number;
}

export interface RequestUpdate {
  name: string;
  complete: number;
  id: number;
}


export interface ResponseCreate {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  complete: number;
}

export interface ResponseDelete {
  success: Boolean,
  message: String
}