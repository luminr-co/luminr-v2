export interface SectionHeaderProps {
  sectionName: string;
}

export default function SectionHeader({ sectionName }: SectionHeaderProps) {
  return (
    <div>
      {" "}
      <h3 className="text-2xl font-medium text-gray text-center mb-4 uppercase">
        {sectionName}
      </h3>
    </div>
  );
}
