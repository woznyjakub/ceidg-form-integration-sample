import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CeidgIntegrationController } from './ceidg-integration.controller';
import { CeidgIntegrationService } from './ceidg-integration.service';

@Module({
  imports: [HttpModule],
  providers: [CeidgIntegrationService],
  controllers: [CeidgIntegrationController],
})
export class CeidgIntegrationModule {}
