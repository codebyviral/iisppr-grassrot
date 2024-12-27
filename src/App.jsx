import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import TemplateList from './components/TemplateList';
import TemplateEditor from './components/TemplateEditor';
import WelcomePage from './components/welcome/WelcomePage';
import { templates, categories } from './data/templates';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (showWelcome) {
    return <WelcomePage onStart={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar onSearch={setSearchQuery} />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <TemplateList
          templates={filteredTemplates}
          onSelectTemplate={setSelectedTemplate}
        />
        
        {selectedTemplate && (
          <TemplateEditor
            template={selectedTemplate}
            onClose={() => setSelectedTemplate(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;