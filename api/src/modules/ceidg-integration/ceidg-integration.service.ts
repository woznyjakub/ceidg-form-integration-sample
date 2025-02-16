import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { getConfig } from '@config/config';

@Injectable()
export class CeidgIntegrationService {
  constructor(private readonly httpService: HttpService) {}

  private readonly baseUrl = 'https://dane.biznes.gov.pl/api/ceidg/v3';

  // NIP is the tax id in Poland
  async getCompanyByTaxId(taxId: string): Promise<unknown> {
    const url = `${this.baseUrl}/firmy`;
    const params = { nip: taxId };

    const { apiKeyCeidg } = getConfig();
    const headers = { Authorization: `Bearer ${apiKeyCeidg}` };

    try {
      const response = await lastValueFrom(this.httpService.get<unknown>(url, { params, headers }));

      return response.data;
    } catch (error) {
      // This API returns code 400 when no companies found
      const status =
        error?.response?.data?.code === 'NIEPOPRAWNY_NUMER_NIP'
          ? HttpStatus.NOT_FOUND
          : error.status;

      throw new HttpException(
        `Failed to get CEIDG resource. Error: ${error.response?.statusText || error.message}`,
        status,
      );
    }
  }
}
