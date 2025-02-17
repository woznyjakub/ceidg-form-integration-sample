import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @MaxLength(50)
  taxId: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  address: string;

  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  postalCode: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  city: string;
}
