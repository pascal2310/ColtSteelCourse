var lis = document.querySelectorAll('li');

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function() {
        lis[i].style.color = 'green'
    })

    lis[i].addEventListener('mouseout', function() {
        lis[i].style.color = 'black'
    })

    lis[i].addEventListener('click', function(){
        lis[i].classList.toggle('done');
    })

}

// var lis = document.querySelectorAll("li");

// for(var i = 0; i < lis.length; i++){
// 	lis[i].addEventListener("mouseover", function(){
// 		this.classList.add("selected");
// 	});

// 	lis[i].addEventListener("mouseout", function(){
// 		this.classList.remove("selected");
// 	});

// 	lis[i].addEventListener("click", function(){
// 		this.classList.toggle("done");
// 	});
// }
