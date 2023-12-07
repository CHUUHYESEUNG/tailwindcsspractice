import { ReactNode } from 'react';

interface LayoutWrapperProps {
    children: ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <main className="flex min-h-screen">
            {children}
        </main>
    );
}
