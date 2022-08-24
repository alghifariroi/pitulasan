let sideMenu = document.querySelector('#side-menu');
let sideBar = document.querySelector('.side-bar');

sideMenu.onclick = () =>{
   sideMenu.classList.toggle('fa-times');
   sideBar.classList.toggle('active');
};

let galleryImages = document.querySelectorAll('.image-container img');
let imagePop = document.querySelector('.image-popup');

galleryImages.forEach(img =>{
   img.onclick = () =>{
      let imageSrc = img.getAttribute('src');
      imagePop.style.display = 'flex';
      imagePop.querySelector('img').src = imageSrc;
   };
});

imagePop.onclick = () =>{
   imagePop.style.display = 'none';
};

document.querySelector('#search-box').oninput = () =>{
   var value = document.querySelector('#search-box').value.toLowerCase();
   galleryImages.forEach(img =>{
      var filter = img.getAttribute('data-search').toLowerCase();
      if(filter.indexOf(value) > -1){
         img.style.display = 'block';
      }else{
         img.style.display = 'none';
      };
   });
};

let categoryBtn = document.querySelectorAll('.category .btn');

categoryBtn.forEach(btn =>{
   btn.onclick = () =>{
      categoryBtn.forEach(remove => remove.classList.remove('active'));
      let dataCategory = btn.getAttribute('data-category');
      galleryImages.forEach(img =>{
         var imgCat = img.getAttribute('data-cat');
         if(dataCategory == 'all'){
            img.style.display = 'block';
         }else if(dataCategory == imgCat){
            img.style.display = 'block';
         }else{
            img.style.display = 'none';
         }
      });
      btn.classList.add('active');
   };
});

let typeBtn = document.querySelectorAll('.type .btn');

// typeBtn.forEach(btn =>{
//    btn.onclick = () =>{
//       typeBtn.forEach(remove => remove.classList.remove('active'));
//       let datatype = btn.getAttribute('data-type');
//       galleryImages.forEach(img =>{
//          var imgtype = img.getAttribute('src').split('.').pop();
//          if(datatype == 'all'){
//             img.style.display = 'block';
//          }else if(datatype == imgtype){
//             img.style.display = 'block';
//          }else{
//             img.style.display = 'none';
//          }
//       });
//       btn.classList.add('active');
//    };
// });

document.querySelector('.reset-btn .btn').onclick = () =>{
   window.location.reload();
};