    const monthBoxes = document.querySelectorAll('.month-box');
    const calendarPopup = document.querySelector('.calendar-popup');
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".icons span");
    const closeBtn = document.querySelector('.close-calendar');

    let currMonth = 0;
    const year = 2026;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function renderCalendar() {
    let firstDayofMonth = new Date(year, currMonth, 1).getDay();
    let lastDateofMonth = new Date(year, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(year, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(year, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      liTag += `<li>${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${year}`;
    daysTag.innerHTML = liTag;

    // Add click event to days
    const dayElements = daysTag.querySelectorAll("li:not(.inactive)");
    dayElements.forEach(day => {
      day.addEventListener("click", () => {
        dayElements.forEach(d => d.classList.remove("active"));
        day.classList.add("active");
      });
    });
  }

  monthBoxes.forEach(box => {
    box.addEventListener('click', () => {
      currMonth = parseInt(box.getAttribute('data-month'));
      renderCalendar();
      calendarPopup.style.display = 'flex';
    });
  });

  prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      if (icon.id === "prev" && currMonth > 0) {
        currMonth -= 1;
      } else if (icon.id === "next" && currMonth < 11) {
        currMonth += 1;
      }
      renderCalendar();
    });
  });

  closeBtn.addEventListener('click', () => {
    calendarPopup.style.display = 'none';
  });