const faqList = document.querySelector('.faq__list');
const faqItems = document.querySelectorAll('.faq__item');

faqList.addEventListener('click', function (e) {
  const item = e.target.closest('.faq__item');

  if (item) {
    item.classList.toggle('open');
  }

  // if (e.target.parentElement.classList.contains('btn-open')) {
  //   faqItems.forEach(item => {
  //     item.classList.remove('open');
  //   });

  //   e.target.closest('.faq__item').classList.add('open');
  // }

  // if (e.target.parentElement.classList.contains('btn-close')) {
  //   e.target.closest('.faq__item').classList.remove('open');
  // }
});
