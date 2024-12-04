function copyEmail() {
    const email = "ahmad53.work@gmail.com"; 
    navigator.clipboard.writeText(email).then(() => {
      const tooltip = document.querySelector(".tooltip");
      tooltip.classList.add("show");
      setTimeout(() => {
        tooltip.classList.remove("show");
      }, 2000);
    });
  }
  