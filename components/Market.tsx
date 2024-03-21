type MarketProps = {
    img: string;
    title: string;
    text: string;
  };
  export function Market({ img, title, text }: MarketProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex">
        <img src={img} className="w-1/2 mr-4 rounded-lg" alt="Market Image" />
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{text}</p>
        </div>
      </div>
    );
  }
  
  