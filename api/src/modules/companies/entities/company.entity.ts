import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity('companies')
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn() // pg wants an extention for uuidv4 (?)
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    comment: '(e.g. NIP, VAT ID, EIN)',
  })
  @IsNotEmpty()
  @MaxLength(50)
  taxId: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  companyName: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  firstName: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  lastName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  address: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  postalCode: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  city: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updatedAt: Date;
}
