import{
    HomeComponent,
    SearchComponent,
    AppComponent,
    routes
} from "./routerTesting";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)], //We import our RouterTestingModule with our routes.
            declarations : [ //We import and declare our components in the test bed configuration.
                HomeComponent,
                SearchComponent,
                AppComponent
            ]
        });
    });

    //Normally to setup routing in an Angular application we import the RouterModule and provide the routes to the NgModule with RouterModule.withRoutes(routes).
//However when testing routing we use the RouterTestingModule instead. This module sets up the router with a spy implementation of the Location Strategy that doesn’t actually change the URL.
//We also need to get the injected Router and Location so we can use them in the test specs.

router = TestBed.get(Router); //	We grab a reference to the injected Router.
location = TestBed.get(Location); //	We grab a reference to the injected Location.
fixture = TestBed.createComponent(AppComponent); //	We ask the test bed to create an instance of our root AppComponent. We don’t need this reference in our test specs but we do need to create the root component with the router-outlet so the router has somewhere to insert components.
router.initialNavigation();//This sets up the location change listener and performs the initial navigation.

it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

it('navigate to "" redirects you to /home ',fakeAsync(() => { //Routing is an asynchronous activity so we use one of the asynchronous testing methods at our disposal, in this case the fakeAsync method.
    router.navigate(['']); //	We trigger the router to navigate to the empty path.
    tick();  //We wait for all pending promises to be resolved.
    expect(location.path()).toBe('./home'); //We can then inspect the path our application should be at with location.path()
}));

//Let’s also add a test spec for navigating to the search route, like so:
it('navigate to "search" takes you to /search', fakeAsync(() => {
    router.navigate(['search']).then(() => {
    tick();
    expect(location.path()).toBe('/search');
    });
  }));
//The spec is exactly the same as the previous one, our link params array is different since we are triggering a different route and our expectation is again different, but the rest is the same.

//We can test routing in Angular by using RouterTestingModule instead of RouterModule to provide our routes.

//This uses a spy implementation of Location which doesn’t trigger a request for a new URL but does let us know the target URL which we can use in our test specs.

});


