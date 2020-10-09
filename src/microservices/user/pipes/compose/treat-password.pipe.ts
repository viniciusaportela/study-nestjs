import { IsStrongPasswordPipe } from '../is-strong-password.pipe';
import { HashPasswordPipe } from '../hash-password.pipe';
import { ExistsPipe } from "../../../../pipes/exists.pipe";

export const TreatPasswordPipe = [new ExistsPipe('password'), IsStrongPasswordPipe, HashPasswordPipe];
