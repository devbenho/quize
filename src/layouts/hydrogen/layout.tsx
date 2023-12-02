export const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-[auto,1fr] grid-rows-1 h-screen gap-4 bg-blue-dark bg-[#5955B3] min-h-screen ">
    {children}
  </div>
);
