import { Section } from '../containers/Section';
import { BaseLayout } from '../layouts/BaseLayout';
import { CompanyForm } from '../components/CompanyForm';

export function MainPage() {
  return (
    <BaseLayout>
      <Section>
        <CompanyForm />
      </Section>
    </BaseLayout>
  );
}
