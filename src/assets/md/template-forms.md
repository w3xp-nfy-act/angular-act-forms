* See:  
  [Template Driven Forms](https://angular.io/guide/forms)  
  [Example](https://angular.io/generated/live-examples/forms/stackblitz.html)
  
Forms are the mainstay of business applications. You use forms to log in, submit a help request, place an order, book a flight, schedule a meeting, and perform countless other data-entry tasks.
  
In developing a form, it's important to create a data-entry experience that guides the user efficiently and effectively through the workflow.

#### Introduction to Template-driven forms
Developing forms requires design skills (which are out of scope for this page), as well as framework support for two-way data binding, change tracking, validation, and error handling, which you'll learn about on this page.

This page shows you how to build a simple form from scratch. Along the way you'll learn how to:

  * Build an Angular form with a component and template.
  * Use ngModel to create two-way data bindings for reading and writing input-control values.
  * Track state changes and the validity of form controls.
  * Provide visual feedback using special CSS classes that track the state of the controls.
  * Display validation errors to users and enable/disable form controls.
  * Share information across HTML elements using template reference variables.

> You can also use a reactive (or model-driven) approach to build forms. However, this page focuses on template-driven forms.

You can build almost any form with an Angular template—login forms, contact forms, and pretty much any business form. You can lay out the controls creatively, bind them to data, specify validation rules and display validation errors, conditionally enable or disable specific controls, trigger built-in visual feedback, and much more.
 
Angular makes the process easy by handling many of the repetitive, boilerplate tasks you'd otherwise wrestle with yourself.
 
You'll learn to build a template-driven form that looks like this:

