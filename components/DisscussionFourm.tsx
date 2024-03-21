"use client"
import { useState, useEffect } from "react";
import Diss from "./Diss";
import axios from "axios";

interface Discussion {
  id: number;
  name: string;
  mess: string;
  address: string;
  like: number;
  views: number;
  comments: number;
}

export function DisscussionFourm() {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Discussion[]>("https://goindiaasignment.vercel.app/api/disscussion");
        setDiscussions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      {discussions.map((discussion, index) => (
        <div key={index} className="bg-gray-200 rounded-lg shadow-xl p-4 w-70">
          <Diss
            name={discussion.name}
            mess={discussion.mess}
            add={discussion.address}
            like={discussion.like}
            views={discussion.views}
            comments={discussion.comments}
          />
        </div>
      ))}
    </div>
  );
}
