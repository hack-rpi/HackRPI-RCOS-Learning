# PHP Notes

## PHP, SQL, phpmyadmin, JavaScript

As part of my goal to learn and understand the basics of web development, I will be learning about how PHP, JS and SQL can be used together to store and manage data. 

### Steps to creating a database
1. Go to (FQDN or localhost)/phpmyadmin and create a new database of whataver title you choose (ex. user_db). 
2. Create table in sql file. For user database, this could look like this: 
```sql
CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(100)
);
```
3. Create form for user to input data using html (call this file form.html)
```html
<form action="submit.php" method="POST">
   Name: <input type="text" name="name"><br>
   Email: <input type="email" name="email"><br>
   <input type="submit" value="Submit">
</form>
```
4. Create a php file called submit.php to handle form submissions and add insert the inputs into the table. Could look something like this:
```php
<?php
// connect to the database
$conn = new mysqli("localhost", "root", "", "user_db");

if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}

// get form data
$name = $_POST['name'];
$email = $_POST['email'];

// insert into table
$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";
$conn->query($sql);

$conn->close();
echo "Data inserted!";
?>
```
5. In order to prevent page from reloading everytime there is a submission. Add some ajax for the form submission.
```html
<form id="userForm">
   Name: <input type="text" name="name"><br>
   Email: <input type="email" name="email"><br>
   <input type="submit" value="Submit">
</form>

<script>
document.getElementById("userForm").onsubmit = function(e) {
   e.preventDefault();

   const formData = new FormData(this);

   fetch('submit.php', {
      method: 'POST',
      body: formData
   })
   .then(response => response.text())
   .then(data => alert(data));
};
</script>
```