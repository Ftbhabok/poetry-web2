import React from 'react';

interface ProductDescriptionProps {
  descriptionHtml: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ descriptionHtml }) => {
  return (
    <div 
      className='text-base text-muted-foreground'
      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
    />
  );
};

export default ProductDescription;