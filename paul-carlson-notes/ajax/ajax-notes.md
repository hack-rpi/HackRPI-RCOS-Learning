# AJAX Notes

## Asynchronous JavaScript and XML
https://learn.jquery.com/ajax/

As part of my goal to learn and understand the basics of web development, I will be learning about AJAX today. 

- The main idea is that requests can be excecuted at the same time as a user interacts with the webpage. Without AJAX, everything on the webpage is paused until the request is completed.

- To account for the way different browsers work with AJAX, jQuery library has its own functions for different things. For example:
    - $.ajax() most general method for making AJAX requests in jQuery
    - $.get() simple way of sending GET request to retrive data from a server, process the data when returned
    - $.getScript() 
    - $.getJSON()
    - $.post()
    - $().load()
