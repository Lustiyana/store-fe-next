/** @format */

import React from "react";
import ItemRecentTransaction from "../../molekul/ItemRecentTransaction";
import TitleSubmenu from "../../atom/TitleSubmenu";
import Card from "@/components/atom/Card";

const transactions = [
    {
        id: 1,
        productName: "Sirup",
        userName: "Lustiyana",
        image: {
            url: "/images/logo-store.png",
            alt: "/images/logo-store.png"
        },
        date: '12 November 2023'
    },
    {
        id: 2,
        productName: "Sirup",
        userName: "Lustiyana",
        image: {
            url: "/images/logo-store.png",
            alt: "/images/logo-store.png"
        },
        date: '12 November 2023'
    },
    {
        id: 3,
        productName: "Sirup",
        userName: "Lustiyana",
        image: {
            url: "/images/logo-store.png",
            alt: "/images/logo-store.png"
        },
        date: '12 November 2023'
    }
]

const RecentTransactions = () => {
  return (
    <div className="flex flex-col gap-8">
      <TitleSubmenu name="Recent Transactions" />
      {transactions.map((item)=>(
      <Card>
        <ItemRecentTransaction item={item} />
      </Card>
      ))}
    </div>
  );
};

export default RecentTransactions;
