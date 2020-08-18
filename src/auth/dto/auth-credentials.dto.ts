import { IsString, Matches, MaxLength, MinLength, IsEmail } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  public username: string;

  @IsEmail()
  public email: string;

  @IsString()
  @MaxLength(20)
  public phonenumber: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/,
    { message: 'Password too weak.' },
  )
  public password: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  public firstname: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  public lastname: string;

  public dateofbirth: Date;

  public gender: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  public country: string;

  public city: string;

  public homeaddress: string;


}
