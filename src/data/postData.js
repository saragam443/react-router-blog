const postData = [
  {
    id: 1,
    title: "JavaScript forEach()",
    date: "12 June 2022",
    content:
      "The forEach() method is an array method in JavaScript that executes a provided function once for each element in the array, in order. It does not return a new array, but instead modifies the original array.Here's an example of how to use the forEach()const colors = ['red', 'green', 'blue'];colors.forEach(function(color) {console.log(color);}); This will log each color in the colors array to the console.You can also pass a second argument to the callback function that represents the index of the current element in the array. For example: Note that the forEach() method does not stop executing the callback function when it returns false. If you want to stop the loop when a certain condition is met, you can use the break statement inside the callback function.",
  },
  {
    id: 2,
    title: "Bootstrap vs Tailwindcss",
    date: "6 May 2021",
    content:
      "Bootstrap and Tailwind CSS are both front-end frameworks that provide pre-designed styles and layout components for building responsive web applications. Both frameworks can save you time and effort by providing a set of well-designed, tested, and reusable styles and components that you can use in your projects. Design philosophy: Bootstrap is a mobile first framework, meaning that its default styles and layout are optimized for mobile devices. Tailwind CSS, on the other hand, is a utility-first framework, which means that it provides a set of low-level, highly customizable CSS classes that you can use to build your own custom styles and layouts. Size and performance: Bootstrap is a larger framework, with more features and styles than Tailwind CSS. This can make it more suitable for complex projects with many different design elements, but it can also result in slower performance and longer page load times. Tailwind CSS, on the other hand, is a smaller and faster framework, but it may require more customization and styling work on your part. Ease of use: Bootstrap provides a set of pre-designed components that you can easily customize and integrate into your projects. It also has a large community and a wide range of documentation and tutorials available online. Tailwind CSS, on the other hand, requires more work to customize and style your components, but it provides more flexibility and control over the look and feel of your project.",
  },
  {
    id: 3,
    title: "Conditonal Rendering",
    date: "3 November 2019",
    content:
      "Conditional rendering refers to the practice of rendering different content or components in a user interface based on certain conditions. In other words, it allows you to show or hide elements in your interface based on certain criteria. There are several ways to implement conditional rendering in JavaScript: Using an if statement: You can use an if statement to test a condition and render different content based on the result. For example: Using a ternary operator: You can use a ternary operator (?) to concisely test a condition and render different content based on the result. For example: Using a short-circuit operator: You can use a short-circuit operator (&&) to test a condition and render content only if the condition is true. For example: Using a switch statement: You can use a switch statement to test multiple conditions and render different content based on the result. For example: It's important to note that conditional rendering should be used carefully, as it can make your code more complex and harder to maintain. It's generally a good idea to minimize the amount of conditional rendering in your code and to use it only when necessary.",
  },
  {
    id: 4,
    title: "Introduction to Props",
    date: "14 April 2020",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse quaerat provident libero incidunt? Harum id dolorem perspiciatis suscipit dicta veniam libero culpa cupiditate pariatur dolores ad vitae eos, ut praesentium quidem ea iusto nostrum recusandae cumque, numquam molestias voluptas aut quasi! Laborum cum sapiente nam qui animi placeat, labore inventore libero, enim non exercitationem dignissimos fugiat facilis odio rerum nostrum reprehenderit. Nemo unde neque officia. At facilis cupiditate natus labore est fugiat odit optio ex, eum ipsa explicabo quas animi ut illo hic, vel totam aut distinctio sit quaerat. Ea expedita ullam cupiditate quisquam similique sequi quos quam inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse quaerat provident libero incidunt? Harum id dolorem perspiciatis suscipit dicta veniam libero culpa cupiditate pariatur dolores ad vitae eos, ut praesentium quidem ea iusto nostrum recusandae cumque, numquam molestias voluptas aut quasi! Laborum cum sapiente nam qui animi placeat, labore inventore libero, enim non exercitationem dignissimos fugiat facilis odio rerum nostrum reprehenderit. Nemo unde neque officia. At facilis cupiditate natus labore est fugiat odit optio ex, eum ipsa explicabo quas animi ut illo hic, vel totam aut distinctio sit quaerat. Ea expedita ullam cupiditate quisquam similique sequi quos quam inventore!",
  },
  {
    id: 5,
    title: "React Hooks",
    date: "23 October 2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse quaerat provident libero incidunt? Harum id dolorem perspiciatis suscipit dicta veniam libero culpa cupiditate pariatur dolores ad vitae eos, ut praesentium quidem ea iusto nostrum recusandae cumque, numquam molestias voluptas aut quasi! Laborum cum sapiente nam qui animi placeat, labore inventore libero, enim non exercitationem dignissimos fugiat facilis odio rerum nostrum reprehenderit. Nemo unde neque officia. At facilis cupiditate natus labore est fugiat odit optio ex, eum ipsa explicabo quas animi ut illo hic, vel totam aut distinctio sit quaerat. Ea expedita ullam cupiditate quisquam similique sequi quos quam inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse quaerat provident libero incidunt? Harum id dolorem perspiciatis suscipit dicta veniam libero culpa cupiditate pariatur dolores ad vitae eos, ut praesentium quidem ea iusto nostrum recusandae cumque, numquam molestias voluptas aut quasi! Laborum cum sapiente nam qui animi placeat, labore inventore libero, enim non exercitationem dignissimos fugiat facilis odio rerum nostrum reprehenderit. Nemo unde neque officia. At facilis cupiditate natus labore est fugiat odit optio ex, eum ipsa explicabo quas animi ut illo hic, vel totam aut distinctio sit quaerat. Ea expedita ullam cupiditate quisquam similique sequi quos quam inventore!",
  },
];

export default postData;
