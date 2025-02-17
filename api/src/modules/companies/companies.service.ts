import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';

import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  async create(createCompanyDto: CreateCompanyDto): Promise<void> {
    const { taxId } = createCompanyDto;

    const existingCompany = await Company.findOne({ where: { taxId } });
    if (existingCompany) {
      throw new ConflictException(`Company with taxId ${taxId} already exists`);
    }

    const company = new Company();
    Object.assign(company, createCompanyDto);

    const errors = await validate(company);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    try {
      await Company.save(company);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
