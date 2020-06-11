// 课程构造函数
function Course(title, link, isbn) {
  this.title = title;
  this.link = link;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `
      <td>${course.title}</td>
      <td><a href="${course.link}">查看</a></td>
      <td>${course.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;

  list.appendChild(row);
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("link").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listeners
document.getElementById("course-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    link = document.getElementById("link").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const course = new Course(title, link, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addCourseToList(course);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
});
