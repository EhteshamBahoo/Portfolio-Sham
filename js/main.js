"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
  form();
  skillbar();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  //Hamburger menu
  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});











  // Wait until the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('click', function() {
        // Get the data-project attribute (e.g., "project1")
        const projectId = this.getAttribute('data-project');
        // Construct the modal id
        const modal = document.getElementById('modal-' + projectId);
        if(modal) {
          modal.classList.add('active');
        }
      });
    });
    
    // Close modal when the close button is clicked
    const closeButtons = document.querySelectorAll('.project-modal-close');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        this.closest('.project-modal').classList.remove('active');
      });
    });
    
    // Also close the modal if user clicks outside the modal content
    const modals = document.querySelectorAll('.project-modal');
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if(e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });
  });
