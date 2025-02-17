import { Controller, Post, Body } from '@nestjs/common';

import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto): Promise<void> {
    await this.companiesService.create(createCompanyDto);
  }
}
