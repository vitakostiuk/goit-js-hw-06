//// 1
const categoriesRef = document.querySelector('#categories');

const listLiCount = categoriesRef.children;
console.log('Number of categories:', listLiCount.length);

//// 2
[...listLiCount].forEach(li => {
  const heading = li.firstElementChild;
  console.log('Category:', heading.textContent);
  const subcategoryUl = heading.nextElementSibling;
  const subcategorylist = subcategoryUl.children;
  console.log('Elements:', subcategorylist.length);
})


