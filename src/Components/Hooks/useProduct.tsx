"use client"

import { useState, useEffect } from 'react';

export interface productType {
  slice(arg0: number, arg1: number): unknown;
  _id: string,
  id: number
  product: string,
  name: string,
  price: number,
  discounted_price: number,
  image: "broccoli.jpg",
  rating: number,
  description: string,
  category: string,
}

const useProducts = () => {
  const [data, setData] = useState<productType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://pro-store-server.vercel.app/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as any);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to cancel the fetch request if component unmounts
    };
  }, []);

  return { data, isLoading, error };
};

export default useProducts;
