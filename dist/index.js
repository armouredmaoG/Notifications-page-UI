const markAllAsReadBtn = document.querySelector(".header__right-side");
const notificationsNumber = document.querySelector(".notifications-number");

const notifications = document.querySelectorAll(".notification");

markAllAsReadBtn.addEventListener("click", function(){
    notifications.forEach((notification)=>{
        notification.classList.remove("unread");
    })
    notificationsNumber.innerText = "0";
})