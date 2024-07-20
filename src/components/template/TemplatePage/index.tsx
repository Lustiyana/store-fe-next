import React from 'react'

interface TemplatePageProps {
    children: any
}
const TemplatePage: React.FC<TemplatePageProps> = ({children}) => {
  return (
    <div className="flex flex-col gap-8">
        {children}
    </div>
  )
}

export default TemplatePage