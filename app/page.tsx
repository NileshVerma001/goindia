"use client"
import { DisscussionFourm } from "@/components/DisscussionFourm";
import { MarketStories } from "@/components/MarketStories";
import Sub from "@/components/Sub";
import { UserLogo } from "@/components/UserLogo";
import { useState } from "react";

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const onlinePeopleExclOurUser = [
    { id: 1, name: "Disscussion Fourm" },
    { id: 2, name: "Market Stories" },
    { id: 3, name: "Sentiment" },
    { id: 4, name: "Market" },
    { id: 5, name: "Sector" },
    { id: 6, name: "Wishlist" },
    { id: 7, name: "Events" },
    { id: 8, name: "News/Interview" },
    
  ];

  return (
    <div className="flex h-screen">
      <div className="bg-[#111827] w-1/3 flex flex-col">
        <div className="flex-grow">
          <UserLogo />
          {onlinePeopleExclOurUser.map((user) => (
            <Sub
              key={user.id}
              id={user.id}
              username={user.name}
              onClick={() => setSelectedUserId(user.id)}
              selected={user.id === selectedUserId}
            />
          ))}
        </div>
      </div>
      <div className="bg-white w-2/3 flex flex-col">
  {!selectedUserId && <div>wrong select</div>}
  {!!selectedUserId && (
    <div>
      {selectedUserId === 1 && <DisscussionFourm/>}
      {selectedUserId === 2 && <MarketStories/>}
      {selectedUserId === 3 && <span>III</span>}
      {selectedUserId === 4 && <span>IV</span>}
      {selectedUserId === 5 && <span>V</span>}
      {selectedUserId === 6 && <span>VI</span>}
      {selectedUserId === 7 && <span>VII</span>}
      {selectedUserId === 8 && <span>VIII</span>}
    </div>
  )}
</div>


    </div>
  );
}
