import { TextInput } from '@tremor/react';
import { RiSearchLine } from '@remixicon/react';


export const TextInputHero = () => <TextInput className="mx-auto max-w-xs" />;
export const TextInputWithIcon = () => <TextInput icon={RiSearchLine} placeholder="Buscar..." />;
export function TextInputUsageExample() {
  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div>
        <TextInput icon={RiSearchLine} placeholder="Search..." />
      </div>
    </div>
  );
}