# Opinions

- Functions are better than Classes (composition over inheritance)
- Data are better than functions (more universally useful -> transcends language)
- Nothing is better than anything superfluous (DRY -> distill out cross-cutting functionality into atomized/modular units of construction)

Since one of the main goals is to move from 'complected' data and functionality, we will be focusing on decoupling these two things in our code as well as - to as great an extent possible - distilling solutions into data. Thus, much of the course revolves around some of the new data-oriented features of ES6+ including:

- assignment
- destructuring assignment
- rest, spread operators
- lambda functions (anonymous/"fat arrow")
- referentially transparent functions (all data needed for a function to execute should either be created/modified within its own scope or passed in as arguments (i.e., no opaque dependencies)
