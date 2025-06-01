const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#FF1493"];

    function getRandomColor() {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    document.addEventListener('click', function() {
      document.body.style.backgroundColor = getRandomColor();
    });