var requestURL = 'https://rsu-library-api.herokuapp.com/books';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'text';
		request.send();
		request.onload = function () {
			var booksText = request.response;
			var books = JSON.parse(booksText);
			var numberBooks = 0;
			for(let i = 0; i < books.length; i++) {
				// numberBooks += books[i].item;
				// console.log(numberBooks);
				var wrapper =  document.querySelector('article');
				var bookItem = document.createElement('div');
				bookItem.className = "book_item";
				bookItem.style.margin = "20px";
				wrapper.appendChild(bookItem);
				var bookItem_img = document.createElement('img');
				bookItem_img.src = books[i].image_url;
				bookItem.appendChild(bookItem_img);
				bookItem_p = document.createElement('p');
				bookItem_p.innerHTML = books[i].title;
				bookItem.appendChild(bookItem_p);
				bookItem_p2 = document.createElement('p');
				bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
				bookItem.appendChild(bookItem_p2);
				bookItem_p.style.margin = "12px";
				bookItem_p2.style.color = "#6f7d95";
				console.log(bookItem.innerHTML);
			};

			////SORTING///


			// var li_all_books = document.getElementById('all_books');
			// var all_books_sort = function () {
			// 		for(let i = 0; i < books.length; i++) {
			// 	// numberBooks += books[i].item;
			// 	// console.log(numberBooks);
			// 			wrapper.innerHTML = "";
			// 			var wrapper =  document.querySelector('article');
			// 			var bookItem = document.createElement('div');
			// 			bookItem.className = "book_item";
			// 			bookItem.style.margin = "20px";
			// 			wrapper.appendChild(bookItem);
			// 			var bookItem_img = document.createElement('img');
			// 			bookItem_img.src = books[i].image_url;
			// 			bookItem.appendChild(bookItem_img);
			// 			bookItem_p = document.createElement('p');
			// 			bookItem_p.innerHTML = books[i].title;
			// 			bookItem.appendChild(bookItem_p);
			// 			bookItem_p2 = document.createElement('p');
			// 			bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
			// 			bookItem.appendChild(bookItem_p2);
			// 			bookItem_p.style.margin = "12px";
			// 			bookItem_p2.style.color = "#6f7d95";
			// 			console.log(bookItem.innerHTML);
			// 		};
			// 	};

			// li_all_books.addEventListener('click', all_books_sort);



			var li_popular = document.getElementById('popular');
			var rating_sort = function () {
				books.sort(function(a, b) {
				return b['rating'] - a['rating'];
			});
				wrapper.innerHTML = "";
				for(let i = 0; i < books.length; i++) {
				// bookItem_img.src = books[j].image_url;
				// bookItem_p.innerHTML = books[j].title;
				// bookItem_p2.innerHTML = "by " + books[j].author.firstName + " " + books[j].author.lastName;
				
					var bookItem = document.createElement('div');
					bookItem.className = "book_item";
					bookItem.style.margin = "20px";
					wrapper.appendChild(bookItem);
					var bookItem_img = document.createElement('img');
					bookItem_img.src = books[i].image_url;
					bookItem.appendChild(bookItem_img);
					bookItem_p = document.createElement('p');
					bookItem_p.innerHTML = books[i].title;
					bookItem.appendChild(bookItem_p);
					bookItem_p2 = document.createElement('p');
					bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
					bookItem.appendChild(bookItem_p2);
					bookItem_p.style.margin = "12px";
					bookItem_p2.style.color = "#6f7d95";
					// console.log(bookItem.innerHTML);
					// console.log(books[j]);
				}
			// console.log(bookItem);
			// console.log(books);
			}
			li_popular.addEventListener('click', rating_sort);
		

		var li_recent = document.getElementById('recent');
		var update_sort = function () {
				books.sort(function(a, b) {
				return b['updatedAt'] - a['updatedAt'];
			});
				wrapper.innerHTML = "";
			for(let i = 0; i < books.length; i++) {
					// bookItem_img.src = books[j].image_url;
					// bookItem_p.innerHTML = books[j].title;
					// bookItem_p2.innerHTML = "by " + books[j].author.firstName + " " + books[j].author.lastName;
					
					var bookItem = document.createElement('div');
					bookItem.className = "book_item";
					// bookItem.style.margin = "20px";
					wrapper.appendChild(bookItem);
					var bookItem_img = document.createElement('img');
					bookItem_img.src = books[i].image_url;
					bookItem.appendChild(bookItem_img);
					bookItem_p = document.createElement('p');
					bookItem_p.innerHTML = books[i].title;
					bookItem.appendChild(bookItem_p);
					bookItem_p2 = document.createElement('p');
					bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
					bookItem.appendChild(bookItem_p2);
					// bookItem_p.style.margin = "12px";
					bookItem_p2.style.color = "#6f7d95";
					// console.log(bookItem.innerHTML);
					// console.log(books[j]);
				}
				// console.log(bookItem);
				// console.log(books);
				}
				li_recent.addEventListener('click', update_sort);
			}


		///SEARCH///
		const article = document.querySelector('article');
			const searchBar = document.forms['search-form'].querySelector('input');
			searchBar.addEventListener('keyup', function(e) {
				const term = e.target.value.toLowerCase();
				const books_select = article.getElementsByTagName('div');
				Array.from(books_select).forEach(function(book) {
					const title = book.textContent;
					if(title.toLowerCase().indexOf(term) != -1) {
						book.style.display = 'block';
					} else {
						book.style.display = "none";
					}
				})
		});

			// const addForm = document.forms['add-book'];
			// addForm.addEventListener('submit', function(e) {
			// 	e.preventDefault();
			// 	const value = addForm.querySelector
			// })


			// var li_popular = document.getElementById('popular');
			// var article = document.querySelector('article');
			
			// var cost_sort = books.sort(function(a, b) {
			// 	return a['cost'] - b['cost'];
			//     });	
			// article.innerHTML = cost_sort;
			// var rating_sort = books.sort(function(a,b) {
			// 	return b['rating'] - a['rating'];
			// });
			// console.log(books);



			// function sort() {
			// 		var nodeList = document.querySelectorAll('.book_item');
			// 		var itemsArray = [];
			// 		var parent = nodeList[0].parentNode;
			// 		for (var i = 0; i < nodeList.length; i++) {    
			// 			itemsArray.push(parent.removeChild(nodeList[i]));
			// 		}
			// 		books.sort(function(a, b) {
			// 			return b['rating'] - a['rating'];
			// 			});
			// 		books.forEach(function(node) {
			// 			parent.appendChild(node)
			// 		});
			// }



			// 	var array = books;
			// 	console.log(books);

			// 	for(let i = 0; i < books.length; i++) {
			// 		wrapper.appendChild(bookItem);
			// 	}
			// 	// var article_elem = document.querySelector('article');
			// 	// var all = document.querySelectorAll(".className");
			// 	// for(let i = 0; i < all.length; i++) {
			// 	// 	// var new_div = document.createElement('div');
			// 	// 	article_elem.appendChild(all[i]);
					
			// 	// 	// article_elem.appendChild(new_div);
			// 	// }
			// }


			
		

			