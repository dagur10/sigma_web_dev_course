function createCard(title, cName, views, monthsOld, duration, thumbnail) {
   let html=`<div class="image">
            <img src=${thumbnail}>
            <div class="dur">
                ${duration}
            </div>
        </div>
        <div class="content">
            <h2>${title}</h2>
            <p>${cName} . ${views} . ${monthsOld}</p>
        </div>`;
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;   
    
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")