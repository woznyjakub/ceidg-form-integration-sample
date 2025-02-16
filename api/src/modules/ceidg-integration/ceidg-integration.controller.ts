import { Controller, Get, Param } from '@nestjs/common';

import { CeidgIntegrationService } from './ceidg-integration.service';

@Controller('ceidg')
export class CeidgIntegrationController {
  constructor(private readonly ceidgService: CeidgIntegrationService) {}

  @Get('/company/:taxId')
  findOne(@Param('taxId') taxId: string): Promise<unknown> {
    return this.ceidgService.getCompanyByTaxId(taxId);
  }
}
