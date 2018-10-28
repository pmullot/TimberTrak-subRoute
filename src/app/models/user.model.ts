import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

export interface Roles {
  viewer?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  uid?: string;
  email?: string;
  name?: string;
  roles: Roles;
}

// export interface IUser extends IMinimumUser {

//   email: string;
//   emailVerified?: boolean;
//   locale?: string;
//   roles?: Roles;
//   isJustCreated?: boolean;
//   cellPhone?: string;
// }
