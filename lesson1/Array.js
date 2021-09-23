var languages=['Javascript','PHP','Ruby'];
console.log(languages.join('- '));
console.log(languages.pop());//xóa element cuối mảng và trả về ptu đã xóa
console.log(languages);
//push thêm ptu cuối mảng và trả về độ dài mới của mảng
console.log(languages.push('Dart','Java'));
//Shift xóa ptu đầu mảng và trả vè ptu da xoa
console.log(languages.shift());
//unshif thêm 1 or nhiều ptu vào đầu mảng trả về độ dài mới của mảng
console.log(languages.unshift('Dartt','Hoai nam'));
console.log(languages)
//splicing cắt xóa chèn ptu moi vào mảng
 /* xoa */ languages.splice(1,0)
 console.log(languages);
 //chen 
 languages.splice(2,0,'Quynh trang','yeu nhau rat hanh phuc')
 console.log(languages);
 //concat de noi array
 var languages2=['Hoai Nam','Quynh Trang'];
 console.log(languages.concat(languages2));
 //slice 
 console.log(languages.slice(0,3))
