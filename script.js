  var link = document.querySelector(".map-info-button");
  var feedback = document.querySelector(".modal-feedback");
  var overlay = document.querySelector(".modal-overlay");
  var close = feedback.querySelector(".modal-close");

  var form = feedback.querySelector(".feedback");
  var login = feedback.querySelector(".name-form");
  var email = feedback.querySelector(".email-form");
  // var question = feedback.querySelector(".question-form");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-view");
    overlay.classList.add("modal-view");
    login.focus();
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-view");
    overlay.classList.remove("modal-view");
    feedback.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("modal-view")) {
        feedback.classList.remove("modal-view");
        overlay.classList.remove("modal-view");
        feedback.classList.remove("modal-error");
      }
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      feedback.classList.remove("modal-error");
      // feedback.offsetWidth = feedback.offsetWidth;
      void feedback.offsetWidth;
      feedback.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
      }
  });
