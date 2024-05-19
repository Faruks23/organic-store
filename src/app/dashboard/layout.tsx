
import Link from "next/link";
import React  from "react";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" !h-screen overflow-auto">
    
      
      <div className="flex min-h-screen flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 md:px-6">
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">

              <span className="text-black">Real Store</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href={'/'} className="font-semibold ">Home</Link>
          </div>
        </header>
        <div className="flex flex-1">
          <nav className="hidden w-60 flex-col border-r bg-white p-4 dark:border-gray-800 dark:bg-gray-950 md:flex">
            <div className="mb-6 grid gap-2">
             
            
             
              <Link
                className="flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                href="/dashboard/all-product"
              >

                Products
              </Link>
             
            </div>
          </nav>
          <main className="flex-1 p-4 md:p-6">
            <div className="w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>

  );
}