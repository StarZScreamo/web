/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      const icon = link.querySelector("i");
      if (icon) {
        icon.classList.add("text-white");
      }
    }
  });
});
