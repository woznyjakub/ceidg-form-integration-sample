export const ceidgResponseMock = {
  firmy: [
    {
      id: '11111111-1111-1111-1111-111111111111',
      nazwa: 'Jan Kowalski',
      adresDzialalnosci: {
        ulica: 'os. Dywizjonu 303',
        budynek: '28',
        lokal: '99',
        miasto: 'Kraków',
        wojewodztwo: 'MAŁOPOLSKIE',
        powiat: 'Kraków',
        gmina: 'Kraków',
        kraj: 'PL',
        kod: '21-100',
        terc: '1231231',
        simc: '0123123',
      },
      wlasciciel: { imie: 'Jan', nazwisko: 'Kowalski', nip: '1234123412', regon: '123451234' },
      dataRozpoczecia: '2020-04-01',
      status: 'AKTYWNY',
      link: 'https://dane.biznes.gov.pl/api/ceidg/v3/firma/11111111-1111-1111-1111-111111111111',
    },
  ],
  count: 1,
  links: {
    next: 'https://dane.biznes.gov.pl/api/ceidg/v3/firmy?nip=1234123412&status=AKTYWNY&status=WYKRESLONY&status=ZAWIESZONY&status=OCZEKUJE_NA_ROZPOCZECIE_DZIALANOSCI&status=WYLACZNIE_W_FORMIE_SPOLKI&limit=25&page=0',
    prev: 'https://dane.biznes.gov.pl/api/ceidg/v3/firmy?nip=1234123412&status=AKTYWNY&status=WYKRESLONY&status=ZAWIESZONY&status=OCZEKUJE_NA_ROZPOCZECIE_DZIALANOSCI&status=WYLACZNIE_W_FORMIE_SPOLKI&limit=25&page=0',
    self: 'https://dane.biznes.gov.pl/api/ceidg/v3/firmy?nip=1234123412&status=AKTYWNY&status=WYKRESLONY&status=ZAWIESZONY&status=OCZEKUJE_NA_ROZPOCZECIE_DZIALANOSCI&status=WYLACZNIE_W_FORMIE_SPOLKI&limit=25&page=0',
    first:
      'https://dane.biznes.gov.pl/api/ceidg/v3/firmy?nip=1234123412&status=AKTYWNY&status=WYKRESLONY&status=ZAWIESZONY&status=OCZEKUJE_NA_ROZPOCZECIE_DZIALANOSCI&status=WYLACZNIE_W_FORMIE_SPOLKI&limit=25&page=0',
    last: 'https://dane.biznes.gov.pl/api/ceidg/v3/firmy?nip=1234123412&status=AKTYWNY&status=WYKRESLONY&status=ZAWIESZONY&status=OCZEKUJE_NA_ROZPOCZECIE_DZIALANOSCI&status=WYLACZNIE_W_FORMIE_SPOLKI&limit=25&page=0',
  },
  properties: {
    'dc:title': 'firmy',
    'dc:description': 'Zwraca listę firm',
    'dc:language': 'pl-PL',
    'schema:provider': 'Ministerstwo Rozwoju i Technologii',
    'schema:datePublished': '2025-02-16 09:37:23',
  },
};
