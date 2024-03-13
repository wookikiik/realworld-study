// 'use client';

// import { createContext, useContext, useState } from 'react';

// export const FeedTabContext = createContext<Tab[]>([]);

// const FeedTabProvider = ({
//   tabs,
//   children,
// }: {
//   tabs: Tab[];
//   children: React.ReactNode;
// }) => {
//   return (
//     <FeedTabContext.Provider value={tabs}>{children}</FeedTabContext.Provider>
//   );
// };

// export const useFeedTab = () => {
//   const tabs = useContext(FeedTabContext);
//   const [feedTabs, setFeedTabs] = useState<Tab[]>(tabs);

//   return {
//     feedTabs,
//     setFeedTabs,
//   };
// };

// export default FeedTabProvider;
