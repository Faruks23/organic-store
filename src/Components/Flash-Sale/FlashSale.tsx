'use client'

import React, { useEffect, useState } from 'react';
import Title from '../common/Title';
import ViewButton from '../common/ViewButton';
import { productType } from '../Hooks/useProduct';
import Card from '../common/Card/Card';

const FlashSale = () => {
  const [data, setData] = useState<productType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pro-store-server.vercel.app/products", {
          next: {
            revalidate: 30,
          }
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='my-[100px]'>
      <div className="flash-sale-head flex justify-between items-center container mx-auto mb-[43px]">
        <Title title='Flash Sale'></Title>
        <ViewButton path='/flash-sale' title='View More'></ViewButton>
      </div>
      <div className="flash-sale-card-container container mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw]'>
          {data.slice(4, 8).map((product: productType) => (
            <Card product={product} key={product.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
