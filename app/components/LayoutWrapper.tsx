import { ReactNode } from 'react';

interface LayoutWrapperProps {
    children: ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <div className="flex min-h-screen">
            {children}
        </div>
    );
}
