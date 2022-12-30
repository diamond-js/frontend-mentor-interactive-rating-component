const selectRatingBtnSelectedClassname = "rating-card__rating-button--selected";
const selectRatingBtns = document.querySelectorAll(
  ".rating-card__rating-button"
);

const submitBtn = document.getElementById("rating-card__submit-btn");
const selectedRatingIndicator = document.getElementById(
  "selected-rating-indicator"
);

selectRatingBtns.forEach((btn) => {
  btn.onclick = () => {
    const currentlyActiveBtn = document.querySelector(
      `.${selectRatingBtnSelectedClassname}`
    );
    if (currentlyActiveBtn !== btn) {
      btn.classList.add(selectRatingBtnSelectedClassname);
    }
    currentlyActiveBtn?.classList.remove(selectRatingBtnSelectedClassname);
  };
});

submitBtn.onclick = () => {
  const currentlyActiveBtn = document.querySelector(
    `.${selectRatingBtnSelectedClassname}`
  );

  if (!currentlyActiveBtn) return;

  selectedRatingIndicator.textContent = currentlyActiveBtn.textContent;

  document.querySelector(".rating-card__select-rating").style.display = "none";
  document.querySelector(".rating-card__appreciation").style.display = "flex";
};
