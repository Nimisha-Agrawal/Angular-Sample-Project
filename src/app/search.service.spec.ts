//Although we are using Jsonp here, testing Http and Jsonp is exactly the same. We just replace instances of Jsonp with Http.

//We want the Jsonp and Http services to use the MockBackend instead of the real Backend, this is the underling code that actually sends and handles HTTP.
//By using the MockBackend we can intercept real requests and simulate responses with test data.

//The configuration is slightly more complex since we are using a factory provider:
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { SearchService } from "./search.service";
describe('Service:SearchService', () => {

  //By using the MockBackend we can intercept real requests and simulate responses with test data.
  let service: SearchService;
  let HttpTestingController: HttpTestingController;
  let backend : MockBackEnd;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [JsonpModule], [HttpClientTestingModule],
        providers: [
          SearchService,
          BaseRequestOptions,
          MockBackend,
          {
//We want the Jsonp and Http services to use the MockBackend instead of the real Backend, this is the underling code that actually sends and handles HTTP.The configuration is slightly more complex since we are using a factory provider:
   provide:  Jsonp, //We are configuring a dependency for the token Http/Jsonp.
  useFactory: (backend,options) => new Http(backend,options), //The injector calls this function in order to return a new instance of the Http class. The arguments to the useFactory function are themselves injected in,
  deps: [MockBackend,BaseRequestOptions] //We define the dependencies to our useFactory function via the deps property.
          }
        ]
    });
     // Inject the http service and test controller for each test
     HttpTestingController = TestBed.get(HttpTestingController);
    //The above configuration ensures that the Jsonp service is constructed using the MockBackend so we can control it later on in testing.
    backend = TestBed.get(MockBackend)  //We grab a reference to the mock backend so we can control the HTTP responses from our test specs.
    service = TestBed.get(SearchService); //We grab a reference to the SearchService, this has been created using the MockBackend above.
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    HttpTestingController.verify();
   });


  //Just by using the MockBackend instead of the real Backend we have stopped the tests from triggering real HTTP requests from being sent out.
  //Now we need to configure the MockBackend to simulate response or to return dummy test data instead,like so:
  it('search should return SearchItems' , fakeAsync(() => { //We use the fakeAsync method to execute in the special fake async zone and track pending promises.Using Http is asynchronous so in order to test we need to use one of the asynchronous testing methods, we’ll use the fakeAsync method.
     let response = {
          "resultCount": 1, //We create some fake data we want the API to respond with
          "results": [
              {              
                 "artistId": 78500,
                 "artistName": "URL",
                 "trackName": "Beautiful day",
                 "artWorkUrl160": "image.jpg",
              }]
            };

      backend.connections.subscribe(connection => { //The mock backend connections property is an observable that emits a connection every time an API request is made.
         connection.mockRespond(new Response(<ResponseOptions>  //For every connection that is requested we tell it to mockRespond with our dummy data.
         {
           body: JSON.stringify(response);
         }));
      });
      //The above code returns the same dummy data for every API request, regardless of the URL.
      //Testing the Response

      //Perform a request and make sure we get the response we expect
      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.search("U2");   //	We make the asynchronous call to service.search(…​)
       // Expect a call to this URL
       const req = HttpTestingController.expectOne(
        "https://itunes.apple.com/search?term=U2&media=music&limit=20"
    );
        // Assert that the request is a GET.
        expect(req.request.method).toEqual("GET");
        // Respond with this data when called
        req.flush(response);

        // Call tick which actually processes te response
      tick();  //We issue a tick() which blocks execution and waits for all the pending promises to be resolved.

      // Run our tests
      expect(service.results.length).toBe(1); //	We now know that the service has received and parsed the response so we can write some expectations.
      expect(service.results[0].artist).toBe("U2");
      expect(service.results[0].name).toBe("Beautiful Day");
      expect(service.results[0].thumbnail).toBe("image.jpg");
      expect(service.results[0].artistId).toBe(78500);
  }));


});
