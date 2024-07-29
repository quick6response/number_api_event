export interface Operator {
  id: number;
  name: string;
  description: string | null;
  foundingDate: Date | null;
  photo: string | null;
  createdAt: Date;
  updatedAt: Date;
}
