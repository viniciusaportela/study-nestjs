import { Roles } from './roles';

export interface JwtDecoded {
  id: string;
  name: string;
  roles: Roles;
}
