"use client"
import { DisscussionFourm } from "@/components/DisscussionFourm";
import { MarketStories } from "@/components/MarketStories";
import Sub from "@/components/Sub";
import { UserHeader } from "@/components/UserHeader";
import { useState } from "react";

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const items = [
    { id: 1, name: "Disscussion Fourm" },
    { id: 2, name: "Market Stories" },
    { id: 3, name: "Sentiment" },
    { id: 4, name: "Market" },
    { id: 5, name: "Sector" },
    { id: 6, name: "Wishlist" },
    { id: 7, name: "Events" },
    { id: 8, name: "News/Interview" },
    
  ];

  const [isClosed, setIsClosed] = useState(false);

    const toggleClose = () => {
        setIsClosed(!isClosed);
    };

  return (
    <div className="flex h-screen">
      <div className={`bg-[#111827] w-1/3 flex flex-col max-w-[350px] ${isClosed ? 'hidden' : ''}`}>
        <div className="flex-grow">
          <UserHeader />
          {items.map((user) => (
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
      <div className="top-auto flex justify-center items-center h-screen">
      {isClosed ? (
                
      <svg onClick={toggleClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>

              ) : (

                <svg onClick={toggleClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
              </svg>
            )}
            </div>
      <div className={`flex flex-col bg-white ${isClosed ? 'w-full' : 'w-2/3'} p-2 overflow-y-auto`}>
  {!selectedUserId && <div>select</div>}
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
