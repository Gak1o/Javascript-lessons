import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nyako';
}

//so I will type a few commannds on the terminal and youll tell mr what they do, ok?
//correct
// ng new is the command you use to automatically create a new Angular project with all the necessary files and configations
// .ur It sets up the project structure, installs dependencies, and creates a basic application template for you to start working on.
//tuko sawa?

//we wait imalize kuinstall hizi packages then we go through the project structure and files to understand how everything works together.
//  Once we have a good understanding of the project, we can start building our application by adding
//  components, services, and other features as needed.

//cool??
//have you installed the angular cli kwa your machine ama bado?
//okay 
// pia wewe run hiyo command ya creating a new project from your side.
//umerun the project pia ama?
//imemaliza?


/*so tuko na 4 key files za our project, 
1. src folder, hapa ndo tunaweka code yetu
2. angular.json, hii ni ya build configuration,
 inatuelekeza jinsi ya kujenga na ku serve project yetu,
  ina settings za development na production builds.
3. package.json, hii ni ya dependancies
4. nodemodules folder,  hizi ni package zenye our project needs to run.

we good tilll there?*/

//so the first thing we will do ni ku run our project
//nice, I was stopping the inline suggestions.
// what does ng serve do?
/*Ng serve runs your app locally  so you can test it and develop it viewing changes in
your browser*/ 
//tuko sawa?

/*so what it does.
1.compiles all the ts to js juu browser huwa hazielewi ts huwa zinaelewa js.
2. Bundles your entire app into a webpack (though hii inaweza kuwa imeacha kufanya na the 
newer versions)
3. Starts a local server at https://localhost:4200
4. inawatch for file changes so that it can make the changes to the browser.
*/

//have you gotten?

// tuko sawa hadi apo ama kuna swali


//now we start writing code what is component based architecture this means we are building individual components then rendering(displaying), them on our web page,
//this brings the question of what is a component,,,
// take a guess and give 3 examples
//ati?
//si kwa code, nataka example ya component in a webapp.
//so by default our app only has 1 component with the name app. This is found in our src folder at the root of our project
//tuko sawa adi apo?
//but your app might need a few more components to run sindio as the example yenye tumepeana ya vs code right?
//So primariry, your work is to design, develop, test and maintain components of a webapp, tuko sawa?
//okay, but before we go to any other components, lets first write our first angular code.

//so basically, each component folder has 3 files, html, css, ts.
// si unajua what this files do?
//nielezee
//html- content yenye unataka ikuwe displayed
//css- styles that content,
//ts- handles the logic layer of that content, cool?
//now wacha nikuulize a few questions.
//1. we have that default app, if I want the title to change from hello Angular to
// Mambo angular, which file will i edit?
//what if I want to change the color of the heading from black to pink.
//what if I want to change so  thet when someone clicks hiyo tag ya get started, inampeleka 
// kwa a new page ?
// yes ni possible na ts ama html pia but we will get to that later.
// we cool adi apo?
// lets discuss a little html first.
// najump alot of things but I hope hupotei sana, 
// so far ni wapi umepotea ama hujashika sana
//usiseme hivyo, just answer my damn question