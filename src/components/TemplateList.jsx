import React from 'react';
import TemplateCard from './TemplateCard';

function TemplateList({ templates, onSelectTemplate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onSelect={onSelectTemplate}
        />
      ))}
    </div>
  );
}

export default TemplateList;