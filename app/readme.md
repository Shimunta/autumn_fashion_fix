Documentation and Approach

1) Establish rough steps to get to goal of completing this project
  1) Decided to use angular given the single page orientation of the website. First thing would be to get the content repeating using a controller and simply have it display. Gain Functionality
  2) Once the content is displaying and behaving normally, style the content using and bootstrap and leverage the heavier CSS workload there. Begin to space and get the content to at the very least look tasteful.
  3) Next is to ensure that iframes / links / font / spacing begin to come together
  4) Next add new responsive design (filter and more button).
  5) Fix functionality and response. Ensure the site is behaving as intended.
  6) Polish and think of ways to improve on the product.

2) Learned and made use of ng-switch. This allows me to generate certain HTML given the type of post we looking at. Now that the page has structure, we will need to add some functionality with a more button and filter.

3) Creating the search feature with a form and connecting the ng-model to the filter in ng-repeat.

4) using angulars built in filter - limit, I created a simple function that would update the value to change the amount of posts that would be displayed, based on ng-click of the button.

5) Although I ran out of time, I intended to add the iframes, change some of the spacing, and figure out a better way to order the posts by date. I also was working on for some time on a solution to parsing some of the links and hashtags in the texts with regex, but that got away from me.

6) Lastly, I realize that in a real environment you cannot just have the data hardcoded into the application. But because of some limitations of angular, you cannot load local files as if calling from an API. Under normal circumstances I would have created a service to make use of $http.get() and parsing and creating an object the application would use dynamically.

7) I also would have liked to make the index.html more DRY and modular by pulling out the different versions of HTML under ng-swith and creating template files that could be change on the fly.
