import { PipeTransform } from '@nestjs/common';

import { IsStrongPasswordPipe } from '../is-strong-password.pipe';
import { HashPasswordPipe } from '../hash-password.pipe';

export const TreatPasswordPipe = [IsStrongPasswordPipe, HashPasswordPipe];
