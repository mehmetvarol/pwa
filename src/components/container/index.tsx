// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="min-h-screen flex flex-col">{children}</div>;
};
