const URL="http://localhost:4000/getTimeStories";
let fragment="<h2>LATEST STORIES</h2>";

async function getdata(URL)
{
    let response=await fetch(URL,{method: 'GET',mode: 'cors'});
    let status=await response.status;
    let data=await response.json()
    data.forEach((story)=>{
        let storyfargment=`<div class="story">
                            <h3><a href="${story.link}">${story.title}</a></h3>
                            <span class="datetime">${storydate()}<span>
                           </div>`
       fragment+=storyfargment;
    })
    document.getElementById("root").innerHTML=fragment;

}
getdata(URL);


function storydate()
{
    var month=["JANUARY0","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]

 var date=new Date();
 let mont=month[date.getMonth()];
 let dt=date.getDate();
 let year=date.getFullYear();
 let hours=date.getHours();
 let min=date.getMinutes();
 const ampm=date.getHours()<=12 ? "AM" : "PM";
 hours=hours%12;
 hours=hours ? hours :12;
 min = min < 10 ? '0'+min : min;
 let res=`${mont} ${dt},${year} ${hours}:${min} ${ampm} EST`
 return res;
}

storydate();

