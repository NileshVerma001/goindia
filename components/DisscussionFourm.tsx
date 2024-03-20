import Diss from "./Diss";

export function DisscussionFourm(){

    const disscussions = [
        { id: 1, name: "Nilesh Verma", mess:"The purple monkey danced gleefully under the twinkling rainbow as polka-dotted clouds floated by with giggling marshmallows",address:"Sector 62", like:25 ,views: 50, comments:35},
        { id: 2, name: "Nilesh Verma", mess:"The purple monkey danced gleefully under the twinkling rainbow as polka-dotted clouds floated by with giggling marshmallows",address:"Sector 62", like:25 ,views: 50, comments:35},
        { id: 3, name: "Nilesh Verma", mess:"The purple monkey danced gleefully under the twinkling rainbow as polka-dotted clouds floated by with giggling marshmallows",address:"Sector 62", like:25 ,views: 50, comments:35},
        { id: 4, name: "Nilesh Verma", mess:"The purple monkey danced gleefully under the twinkling rainbow as polka-dotted clouds floated by with giggling marshmallows",address:"Sector 62", like:25 ,views: 50, comments:35},
      ];

    return(
<div className="grid grid-cols-1 gap-4">
  {disscussions.map((user) => (
    <div key={user.id} className="bg-gray-200 rounded-lg shadow-xl p-4 w-70">
      <Diss
        name={user.name}
        mess={user.mess}
        add={user.address}
        like={user.like}
        views={user.views}
        comments={user.comments}
      />
    </div>
  ))}
</div>


      
      
    );
}