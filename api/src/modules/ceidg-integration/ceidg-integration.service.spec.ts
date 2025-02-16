import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';

import { CeidgIntegrationService } from './ceidg-integration.service';
import { ceidgResponseMock } from './test/mocks';

describe('CeidgIntegrationService', () => {
  let ceidgService: CeidgIntegrationService;

  const externalApiGetter = vi.fn();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: HttpService,
          useValue: { get: externalApiGetter },
        },
        CeidgIntegrationService,
      ],
    }).compile();

    ceidgService = module.get<CeidgIntegrationService>(CeidgIntegrationService);
  });

  describe('getCompanyByTaxId', () => {
    it('should return ceidg data', async () => {
      externalApiGetter.mockReturnValue(of({ data: ceidgResponseMock }));
      const exampleId = '1111111111';

      const result = await ceidgService.getCompanyByTaxId(exampleId);

      expect(result).toEqual(ceidgResponseMock);
    });

    it('should throw an 404 error when not found', async () => {
      const error = {
        response: {
          data: {
            code: 'NIEPOPRAWNY_NUMER_NIP',
          },
          statusText: 'Bad Request',
        },
        status: HttpStatus.BAD_REQUEST,
      };

      externalApiGetter.mockReturnValue(throwError(() => error));
      const exampleId = '1111111111';

      const result = ceidgService.getCompanyByTaxId(exampleId);

      await expect(result).rejects.toThrow(HttpException);
      await expect(result).rejects.toMatchObject({
        status: HttpStatus.NOT_FOUND,
      });
    });
  });
});
