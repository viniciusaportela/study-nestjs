import { ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';

const weakPasswords = [
  '202cb962ac59075b964b07152d234b70',  // 123
  'e10adc3949ba59abbe56e057f20f883e', // 123456
  'e8d95a51f3af4a3b134bf6bb680a213a', // senha
  '5f4dcc3b5aa765d61d8327deb882cf99', // password
  '900150983cd24fb0d6963f7d28e17f72' //abc
];

@ValidatorConstraint({name: 'IsStrongPassword', async: false})
export class IsStrongPassword implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments) {
    if (weakPasswords.includes(password)) {
      return false;
    } else {
      return true;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return "The given password is too weak";
  }
}