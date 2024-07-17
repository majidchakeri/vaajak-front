import dynamicIconImports from "lucide-react/dynamicIconImports";
import { LucideProps } from 'lucide-react';

interface IconsComponentPropType extends LucideProps {
  name: keyof typeof dynamicIconImports;
}
