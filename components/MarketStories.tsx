import { useEffect, useState } from "react";
import { Market } from "./Market";
import axios from "axios";

interface Marke {
  id: number;
  img: string;
  title: string;
  text: string;
}

export function MarketStories() {
  const [stories, setStories] = useState<Marke[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Marke[]>("https://goindiaasignment.vercel.app/api/market");
        setStories(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {stories.map((story, index) => (
        <div key={index} className="bg-gray-200 rounded-lg shadow-xl p-4 w-70">
          <Market
            img={story.img}
            title={story.title}
            text={story.text}
          />
        </div>
      ))}
    </div>
  );
}
