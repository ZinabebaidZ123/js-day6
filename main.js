

function Book(id , name , writer_name , numOfPages){
    this.id = id;
    this.name = name ;
    this.writer_name = writer_name;
    this.numOfPages = numOfPages;

}

function Box (width , height , booksArr ){
    this.width = width;
    this.height = height;
    this.booksArr = booksArr;
}


Box.prototype.area = function(){
    var area = (this.width ) * (this.height);
    return area

  }

var book1 = new Book(1 , "compiler" , "zeinab" , 1000  );
var book2 = new Book(2 , "logic" , "tasneem" , 500  );
var book3 = new Book(3 , "IC" , "aya" , 200  );
var book4 = new Book(4 , "Database" ," fatma" , 300  );
var book5 = new Book(5 , "Math" , "lyla" , 400  );

var bookArr = [];

bookArr.push(book5);
bookArr.push(book4);
bookArr.push(book3);
bookArr.push(book2);
bookArr.push(book1);
console.log(bookArr);



var box = new Box(20 , 30 , bookArr);
console.log(box);

Box.prototype.valuOf = function(){
    var sum = 0 ;

    for(var i = 0 ; i< bookArr.length ; i++){
        sum+= this.booksArr[i].numOfPages;
    }
    return sum;
  }

console.log(box.valuOf());
console.log(box.area());
//Q2----------------------------------------------------------------------------
function Point3D(x , y ,z){
    this.x = 0 | x;
    this.y = 0 |y;
    this.z = 0 | z;
    
}


Point3D.prototype.print3DPoints = function(){
    return( " x = " + this.x + "y = " + this.y + " z = " + this.z );
}

var point = new Point3D(3 , 5 ,6);


// console.log(point.);
Point3D.prototype.calcDistance = function(p2){
    var X = Math.abs(this.x - p2[0]);
    var Y = Math.abs(this.y - p2[1]);
    var Z = Math.abs(this.z  - p2[2]);

    return Math.floor( Math.sqrt(Math.pow(X,2) + Math.pow(Y ,2) + Math.pow(Z ,2)));
}
console.log(point.print3DPoints());
point.calcDistance([1, 3 ,2]);
console.log(point.calcDistance([1, 3 ,2]));

//Q3------------------------------------------------------------------------
// function Course(course_name ,  course_duration ){
//   this.course_name = course_name;
//   this.course_duration =  course_duration;
// }

// function Student( course_grade  , course_data ){
   
//    this.course_grade = course_grade;
//    this.course_data = course_data;
   

// }

// var course1 = new Course("math " , "20h");
// var course2 = new Course("sensor" , "30h") ;
// var course3 = new Course("data base" , "10h");
// var course4 = new Course("ic"  , "5h");

// var courseInfo = [course1 ,course2 , course3 , course4 ];

// var stGrades = [20, 30, 40 ,50];
// var st = new Student(stGrades , courseInfo);
// console.log(st);
// console.log(st);

// Student.prototype.display_courses = function(){
//     var str = " ";
//     for(var i = 0 ; i< courseInfo.length ;  i++){
//         str += this.course_data[i].course_name + " " ;
//     }
//     return str
// }

// console.log(st.display_courses());

// var res = 0 ;
// Student.prototype.compute_grades = function(){
//     for(var i = 0 ; i < stGrades.length ; i++){
//        res+= this.course_grade[i];
//     }
//     return res;
// }
// console.log(st.compute_grades());

//------------onother sol-------------------------------------
function Course(course_name ,  course_duration , course_grade ){
    this.course_name = course_name;
    this.course_duration =  course_duration;
    this.course_grade = course_grade;
  }
  
  function Student( student_name , course_data ){
     
    this.student_name = student_name;
     this.course_data = course_data;
  
  }

var course1 = new Course("math " , "20h" , 50);
var course2 = new Course("sensor" , "30h" , 50) ;
var course3 = new Course("data base" , "10h" ,100);
var course4 = new Course("ic"  , "5h" ,150);



var courseInfo = [course1 ,course2 , course3 , course4 ];
var st = new Student("zeinab" , courseInfo);

Student.prototype.display_courses = function(){
    var stCourses = " ";
    var stGrades = 0;
    for(var i = 0 ; i< courseInfo.length ;  i++){
        stCourses += this.course_data[i].course_name + " " ;
        stGrades += this.course_data[i].course_grade;
    }
    console.log(stGrades);
    return stCourses;
  
}

console.log(st.display_courses());
console.log(st);