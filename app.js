// 课程构造函数
function Course(title, link, isbn) {
  this.title = title;
  this.link = link;
  this.isbn = isbn;
}

// UI 构造函数
function UI() {}

// 添加课程
UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  // 创建
  const row = document.createElement("tr");
  // 插入
  row.innerHTML = `
      <td>${course.title}</td>
      <td><a href="${course.link}">查看</a></td>
      <td>${course.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;

  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("link").value = "";
  document.getElementById("isbn").value = "";
};

document.getElementById("course-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    link = document.getElementById("link").value,
    isbn = document.getElementById("isbn").value;

  const course = new Course(title, link, isbn);

  const ui = new UI();

  ui.addCourseToList(course);

  ui.clearFields();

  e.preventDefault();
});
