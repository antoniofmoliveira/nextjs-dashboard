import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
        <div className="w-full">

            <Suspense key={query} fallback={<CustomersTableSkeleton />}>
                <Table query={query} />
            </Suspense>

        </div>
    );
}