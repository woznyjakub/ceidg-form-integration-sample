import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormFields = {
  taxId: string;
  companyName: string;
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
};

export function CompanyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const backendBaseUrl = 'http://localhost/api';

  const fetchCompanyData = async (taxId: string) => {
    try {
      const response = await axios.get(`${backendBaseUrl}/ceidg/company/${taxId}`);
      const data = response.data.firmy[0];

      console.log({ data });
      if (data) {
        setValue('companyName', data.nazwa);
        setValue('firstName', data.wlasciciel?.imie);
        setValue('lastName', data.wlasciciel?.nazwisko);
        setValue(
          'address',
          `${data.adresDzialalnosci?.ulica || ''}${
            data.adresDzialalnosci?.budynek ? ` ${data.adresDzialalnosci?.budynek}` : ''
          }`,
        );
        setValue('postalCode', data.adresDzialalnosci?.kod);
        setValue('city', data.adresDzialalnosci.miasto);
      } else {
        setMessage('Nie znaleziono danych dla podanego NIPu.');
      }
    } catch {
      setMessage('Nie udało się pobrać danych z CEIDG.');
    }
  };

  const onSubmit = async (data: FormFields) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${backendBaseUrl}/companies`, data);
      console.log({ response });
      if (response.status >= 200 && response.status < 300) {
        setMessage('Firma została dodana do listy.');
      } else {
        setMessage('Błąd podczas przetwarzania danych.');
      }
    } catch (error) {
      // eslint-disable-next-line
      // @ts-ignore
      if (error.status === 409) {
        setMessage('Firma z tym NIPem już istnieje na liście.');
      } else {
        setMessage('Błąd podczas przetwarzania danych.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTaxIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const taxId = e.target.value;
    if (taxId.length === 10) {
      fetchCompanyData(taxId);
    }
  };

  return (
    <div>
      <h2>Dodaj Firmę</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="taxId">NIP</label>
          <input
            id="taxId"
            type="text"
            {...register('taxId', {
              required: 'NIP jest wymagany',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'NIP musi składać się z 10 cyfr',
              },
            })}
            onChange={handleTaxIdChange}
          />
          {errors.taxId && <p>{errors.taxId.message}</p>}
        </div>

        <div>
          <label htmlFor="companyName">Nazwa Firmy</label>
          <input
            id="companyName"
            {...register('companyName', { required: 'Nazwa firmy jest wymagana' })}
          />
          {errors.companyName && <p>{errors.companyName.message}</p>}
        </div>

        <div>
          <label htmlFor="firstName">Imię</label>
          <input id="firstName" {...register('firstName', { required: 'Imię jest wymagane' })} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Nazwisko</label>
          <input id="lastName" {...register('lastName', { required: 'Nazwisko jest wymagane' })} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="address">Adres</label>
          <input id="address" {...register('address', { required: 'Adres jest wymagany' })} />
          {errors.address && <p>{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="postalCode">Kod Pocztowy</label>
          <input
            id="postalCode"
            {...register('postalCode', { required: 'Kod pocztowy jest wymagany' })}
          />
          {errors.postalCode && <p>{errors.postalCode.message}</p>}
        </div>

        <div>
          <label htmlFor="city">Miejscowość</label>
          <input id="city" {...register('city', { required: 'Miejscowość jest wymagana' })} />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Wysyłanie...' : 'Dodaj Firmę'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
