import React, { useEffect, useState } from "react";
import { getSubscriptionDetails } from "../../Services/adminApi";
import SubscriptionsTable from "../../components/admin/SubscriptionsTable";

export default function Subscriptions() {
  const [Subscriptions, setSubscriptions] = useState([]);
  useEffect(() => {
    getSubscriptionDetails()
      .then((res) => {
        setSubscriptions(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <SubscriptionsTable data={Subscriptions} />
    </div>
  );
}
