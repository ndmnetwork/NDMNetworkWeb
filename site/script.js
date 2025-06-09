console.log("Choo choo!");
// Touch-friendly dropdown toggle for "Bots ▾"
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("botsDropdownToggle");
  const dropdown = dropdownToggle?.closest(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("open");
    });

    // Optional: close when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});
