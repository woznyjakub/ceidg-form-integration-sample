import { Test, TestingModule } from '@nestjs/testing';

import { CeidgIntegrationController } from './ceidg-integration.controller';
import { CeidgIntegrationService } from './ceidg-integration.service';

describe('CeidgIntegrationController', () => {
  let ceidgController: CeidgIntegrationController;
  const getCompanyByTaxIdMock = {};

  const mockCeidgService = {
    getCompanyByTaxId: vi.fn(() => getCompanyByTaxIdMock),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CeidgIntegrationController],
      providers: [
        {
          provide: CeidgIntegrationService,
          useValue: mockCeidgService,
        },
      ],
    }).compile();

    ceidgController = module.get<CeidgIntegrationController>(CeidgIntegrationController);
  });

  it('should get company data by tax ID', async () => {
    const taxId = '1111111111';

    const result = await ceidgController.findOne(taxId);

    expect(result).toBe(getCompanyByTaxIdMock);
    expect(mockCeidgService.getCompanyByTaxId).toHaveBeenCalledWith(taxId);
  });
});
