document.getElementById("generateStory").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let place = document.getElementById("place").value.trim();
    let object = document.getElementById("object").value.trim();
    let action = document.getElementById("action").value.trim();
    let storyDiv = document.getElementById("story");
  
    if (name === "" || place === "" || object === "" || action === "") {
      alert("Please fill in all fields!");
      return;
    }
  
    let stories = [
      `One day, ${name} went to ${place} and found a mysterious ${object}. Without thinking, ${name} decided to ${action}, and something magical happened!`,
      `In the heart of ${place}, ${name} discovered a hidden ${object}. As curiosity took over, ${name} started to ${action}, and the adventure began!`,
      `${name} was walking through ${place} when suddenly a ${object} appeared. Without hesitation, ${name} chose to ${action}, leading to an unforgettable experience!`,
      `While exploring ${place}, ${name} saw a sparkling ${object}. As soon as they touched it, they were transported to a new world where they had to ${action} to find a way back home!`,
      `One night at ${place}, ${name} found an ancient ${object}. The moment they tried to ${action}, the object began to glow, revealing a hidden secret!`,
      `At ${place}, ${name} was given a strange ${object} by an old wise person. They were told that if they ${action} at the right moment, something incredible would happen!`,
      `${name} was cleaning their attic when they stumbled upon an old ${object}. Curious, they decided to ${action}, and suddenly, they were taken on a journey through time!`,
      `In ${place}, ${name} met a talking ${object}. The ${object} asked ${name} to help it ${action}, and together they embarked on a quest to save the day!`,
      `While hiking in ${place}, ${name} found a magical ${object}. They realized that if they ${action}, they could unlock its hidden powers!`,
      `During a stormy night in ${place}, ${name} discovered a glowing ${object}. As the thunder roared, ${name} bravely decided to ${action}, and the storm turned into a beautiful light show!`,
      `In ${place}, ${name} found a treasure map leading to a hidden ${object}. With excitement, ${name} set out to ${action}, uncovering secrets along the way!`,
      `While visiting ${place}, ${name} encountered a friendly ${object}. Together, they decided to ${action}, and their friendship blossomed into an epic adventure!`,
      `In ${place}, ${name} discovered a mysterious ${object} that granted wishes. Eager to test its power, ${name} wished to ${action}, and the world around them changed forever!`,
      `One sunny day in ${place}, ${name} found a magical ${object}. They realized that if they ${action}, they could make their wildest dreams come true!`,
    ];
  
    let randomStory = stories[Math.floor(Math.random() * stories.length)];
  
    storyDiv.innerText = randomStory;
    storyDiv.style.display = "block";
  });