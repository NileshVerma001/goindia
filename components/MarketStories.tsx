import { Market } from "./Market";

export function MarketStories(){

    const stories = [
        { id: 1, img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg", title:"the cloud sunset ",text:"As the sun dipped below the horizon, its golden rays painted the clouds in a mesmerizing array of hues, casting a breathtaking sunset sky. The clouds, adorned with shades of pink, orange, and purple, created a picturesque scene that captivated all who beheld it."},
        { id: 1, img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg", title:"the cloud sunset ",text:"As the sun dipped below the horizon, its golden rays painted the clouds in a mesmerizing array of hues, casting a breathtaking sunset sky. The clouds, adorned with shades of pink, orange, and purple, created a picturesque scene that captivated all who beheld it."},
        { id: 1, img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg", title:"the cloud sunset ",text:"As the sun dipped below the horizon, its golden rays painted the clouds in a mesmerizing array of hues, casting a breathtaking sunset sky. The clouds, adorned with shades of pink, orange, and purple, created a picturesque scene that captivated all who beheld it."},
        { id: 1, img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg", title:"the cloud sunset ",text:"As the sun dipped below the horizon, its golden rays painted the clouds in a mesmerizing array of hues, casting a breathtaking sunset sky. The clouds, adorned with shades of pink, orange, and purple, created a picturesque scene that captivated all who beheld it."},

    ];

    return(
        <div className="grid grid-cols-1 gap-4">
  {stories.map((user) => (
    <div key={user.id} className="bg-gray-200 rounded-lg shadow-xl p-4 w-70">
      <Market
        img={user.img}
        title={user.title}
        text={user.text}
      />
    </div>
  ))}
</div>
    );
}