export type AnimalType = 'Cat' | 'Dog' | 'Mouse';

export interface Animal {
  type: AnimalType;
  name: string;
  id: string;
}